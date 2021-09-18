import { createAsyncThunk, isAnyOf, createSlice } from '@reduxjs/toolkit';

import { UserAuth, RequestStatus, UserCredentials } from '../../types';

const LOGOUT = 'auth/logout';

export const logout = () => ({
  type: LOGOUT,
});

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (
    credentials: UserCredentials,
    { rejectWithValue },
  ): Promise<UserAuth | any> => {
    try {
      const data = JSON.stringify(credentials);

      // TODO: Create reusable api utility function / move ro redux
      const response = await fetch('http://localhost:3080/api/users/signup', {
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

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (
    credentials: UserCredentials,
    { rejectWithValue },
  ): Promise<UserAuth | any> => {
    // TODO: Fix type
    try {
      const data = JSON.stringify(credentials);

      const response = await fetch('http://localhost:3080/api/users/signin', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const accountData = await response.json();

      if (Array.isArray(accountData?.errors) && accountData.errors.length > 0) {
        console.log(accountData.errors[0].message);
        throw accountData.errors[0].message;
      }

      return accountData;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export interface AuthState {
  accountData: UserAuth | null;
  isAuthenticated: boolean;
  status: RequestStatus;
  error: any; // TODO: Create type
  isLoading: boolean;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    isLoading: false,
    status: 'idle',
    accountData: null,
    error: null,
  } as AuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LOGOUT, (state) => {
        state.isAuthenticated = false;
      })
      .addMatcher(isAnyOf(loginUser.pending, registerUser.pending), (state) => {
        state.status = 'loading';
        state.error = null;
        state.isLoading = true;
      })
      .addMatcher(
        isAnyOf(loginUser.fulfilled, registerUser.fulfilled),
        (state, action) => {
          state.status = 'succeeded';
          state.accountData = action.payload;
          state.isAuthenticated = true;
          state.isLoading = false;
        },
      )
      .addMatcher(
        isAnyOf(loginUser.rejected, registerUser.rejected),
        (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
          state.isLoading = false;
        },
      );
  },
});
