import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    authenticate: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuthenticated = payload;
    },
  },
});

export const { authenticate } = authSlice.actions;
