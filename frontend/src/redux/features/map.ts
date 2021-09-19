import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Coords } from 'google-map-react';

import { Report } from '../../types';

export const mapSlice = createSlice({
  name: 'map',
  initialState: {
    active: {} as Report,
    coords: {} as Coords,
  },
  reducers: {
    setActiveReport: (state, { payload }: PayloadAction<Report>) => {
      state.active = payload;
    },
    setMapCoords: (state, { payload }: PayloadAction<Coords>) => {
      state.coords = payload;
    },
  },
});

export const { setActiveReport, setMapCoords } = mapSlice.actions;
