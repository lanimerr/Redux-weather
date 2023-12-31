import { combineReducers } from '@reduxjs/toolkit';
import weatherReducer from './slices/fetch';

const rootReducer = combineReducers({
    weather: weatherReducer,
});

export default rootReducer;