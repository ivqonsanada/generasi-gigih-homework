import { configureStore } from '@reduxjs/toolkit';
import user from './user';
import track from './track';

const store = configureStore({
  reducer: {
    user,
    track
  }
});

export { store };
export default store;
