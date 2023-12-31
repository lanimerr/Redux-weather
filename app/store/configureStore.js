import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './slices/fetch';
import rootReducer from '../store/rootReducer';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    root: rootReducer,
  },
});

export default store;