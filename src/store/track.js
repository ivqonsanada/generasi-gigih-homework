import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedTracks: [],
  tracks: [],
  next: ''
};

export const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    updateTracks: (state, action) => {
      const { tracks, nextRoute } = action.payload;
      state.tracks = tracks;
      state.next = nextRoute;
    },
    updateSelectedTracks: (state, action) => {
      state.selectedTracks = action.payload;
    },
    clearSelectedTracks: (state) => {
      state.selectedTracks = [];
    }
  }
});

export const {
  updateTracks, updateSelectedTracks, clearSelectedTracks } = trackSlice.actions;

export default trackSlice.reducer;
