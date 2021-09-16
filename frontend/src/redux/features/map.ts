import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Coords } from 'google-map-react';

import { IReport } from '../../entities/report';

export const mapSlice = createSlice({
  name: 'map',
  initialState: {
    active: {} as IReport,
    coords: {} as Coords,
  },
  reducers: {
    setActiveReport: (state, { payload }: PayloadAction<IReport>) => {
      state.active = payload;
    },
    setMapCoords: (state, { payload }: PayloadAction<Coords>) => {
      state.coords = payload;
    },
  },
});

export const { setActiveReport, setMapCoords } = mapSlice.actions;
