import { createAsyncThunk, isAnyOf, createSlice } from '@reduxjs/toolkit';

import { Report, RequestStatus } from '../../types';
import { RootState } from '../store';

export const createReport = createAsyncThunk(
  'reports/new',
  async (
    report: Report,
    { rejectWithValue, getState },
  ): Promise<Report | any> => {
    try {
      const { auth } = getState() as RootState;

      const data = JSON.stringify({ user: auth.accountData?.user, ...report });

      // TODO: Create reusable api utility function / move ro redux
      const response = await fetch('http://localhost:3090/api/reports/add', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const respData = await response.json();

      if (Array.isArray(respData?.errors) && respData.errors.length > 0) {
        throw respData.errors[0].message;
      }

      return respData;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const deleteReport = createAsyncThunk(
  'reports/deleteReport',
  async (reportID: string, { rejectWithValue }) => {
    try {
      // TODO: Create reusable api utility function / move ro redux
      const response = await fetch(
        `http://localhost:3090/api/reports/delete/${reportID}`,
        {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );

      const respData = await response.json();

      if (Array.isArray(respData?.errors) && respData.errors.length > 0) {
        throw respData.errors[0].message;
      }

      return respData;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const fetchAllReports = createAsyncThunk(
  'reports/fetchAllReports',
  async (_: void, { rejectWithValue }) => {
    try {
      // TODO: Create reusable api utility function / move ro redux
      const response = await fetch('http://localhost:3090/api/reports/all', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const respData = await response.json();

      if (Array.isArray(respData?.errors) && respData.errors.length > 0) {
        throw respData.errors[0].message;
      }

      return respData;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export interface ReportsState {
  data: Report[] | null;
  status: RequestStatus;
  error: any; // TODO: Create type
  isLoading: boolean;
}

export const reportsSlice = createSlice({
  name: 'reports',
  initialState: {
    data: [],
    isLoading: false,
    status: 'idle',
    error: null,
  } as ReportsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          createReport.pending,
          fetchAllReports.pending,
          deleteReport.pending,
        ),
        (state) => {
          state.status = 'loading';
          state.error = null;
          state.isLoading = true;
        },
      )
      .addMatcher(isAnyOf(fetchAllReports.fulfilled), (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.reports;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          createReport.rejected,
          fetchAllReports.rejected,
          deleteReport.rejected,
        ),
        (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
          state.isLoading = false;
        },
      );
  },
});
