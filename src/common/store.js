import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from '../Home/Settings/Settings.slice';

export default configureStore({
  reducer: {
    settings: settingsReducer,
  },
})