import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { authSlice } from '../redux/features/auth';
import { mapSlice } from '../redux/features/map';
import { uiSlice } from '../redux/features/ui';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    map: mapSlice.reducer,
    ui: uiSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
