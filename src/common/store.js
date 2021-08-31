import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Home/Home.slice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})