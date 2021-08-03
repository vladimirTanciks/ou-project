import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false
  },
  reducers: {
    authenticate: (state, { payload }: PayloadAction<{isAuthenticated: boolean  }>) => {
      state.isAuthenticated = payload.isAuthenticated
    }
  }
})