import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IReport } from '../../entities/report';

export const mapSlice = createSlice({
  name: 'map',
  initialState: {
    active: {} as IReport,
  },
  reducers: {
    setActiveReport: (state, { payload }: PayloadAction<IReport>) => {
      state.active = payload;
    },
  },
});

export const { setActiveReport } = mapSlice.actions;
