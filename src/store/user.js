import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload;
    },
    logout: (state) => {
      state.accessToken = undefined;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
