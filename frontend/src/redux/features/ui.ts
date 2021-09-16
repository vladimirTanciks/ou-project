import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NotificatorInfo } from '../../types';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    notificator: {} as NotificatorInfo | null,
  },
  reducers: {
    showNotification: (state, { payload }: PayloadAction<NotificatorInfo>) => {
      state.notificator = payload;
    },
    clearNotification: (state) => {
      state.notificator = null;
    },
  },
});

export const { showNotification, clearNotification } = uiSlice.actions;
