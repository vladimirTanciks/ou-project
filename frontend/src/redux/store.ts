import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../redux/features/auth';
import { mapSlice } from '../redux/features/map';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    map: mapSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
