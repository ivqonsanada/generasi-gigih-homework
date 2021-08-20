import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedTracks: [],
  tracks: []
};

export const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    updateTracks: (state, action) => {
      state.tracks = action.payload;
    },
    updateSelectedTracks: (state, action) => {
      state.selectedTracks = action.payload;
    },
    clearSelectedTracks: (state) => {
      state.selectedTracks = [];
    }
  }
});

export const { updateTracks, updateSelectedTracks, clearSelectedTracks } = trackSlice.actions;

export default trackSlice.reducer;
