import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { UserAuth, RequestStatus, UserCredentials } from '../../types';

const LOGOUT = 'auth/logout';

export const logout = () => ({
  type: LOGOUT,
});

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
  accountData: any; // TODO: Create type
  isAuthenticated: boolean;
  status: RequestStatus;
  error: any;
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
  extraReducers: {
    'auth/loginUser/pending': (state) => {
      state.status = 'loading';
      state.error = null;
      state.isLoading = true;
    },
    'auth/loginUser/fulfilled': (state, action) => {
      state.status = 'succeeded';
      state.accountData = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;

      // history.push(routes.MAP);
    },
    'auth/loginUser/rejected': (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
      state.isLoading = false;
    },
    [LOGOUT]: (state) => {
      state.isAuthenticated = false;
    },
  },
});
