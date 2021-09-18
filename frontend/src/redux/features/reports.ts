import { createAsyncThunk, isAnyOf, createSlice } from '@reduxjs/toolkit';

import { Report, RequestStatus } from '../../types';
import { RootState } from '../store';

const LOGOUT = 'auth/logout';

export const logout = () => ({
  type: LOGOUT,
});

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
        console.log(respData.errors[0].message);
        throw respData.errors[0].message;
      }

      return respData;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export interface ReportsState {
  reports: Report[] | null;
  status: RequestStatus;
  error: any; // TODO: Create type
  isLoading: boolean;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    reports: [],
    isLoading: false,
    status: 'idle',
    error: null,
  } as ReportsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(createReport.pending), (state) => {
        state.status = 'loading';
        state.error = null;
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(createReport.fulfilled), (state, action) => {
        state.status = 'succeeded';
        state.reports = action.payload;
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(createReport.rejected), (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});
