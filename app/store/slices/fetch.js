import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  weatherData: {},
  city: '',
  temperature: [],
  pressure: [],
  humidity: [],
  loading: false,
  error: null,
  cities: [],
};

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city, thunkAPI) => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=${city}&appid=${apiKey}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCity: (state, action) => {
      const { name, data } = action.payload;

      const existingCityIndex = state.cities.findIndex((city) => city.name === name);

      if (existingCityIndex !== -1) {
        const updatedCities = [...state.cities];
        updatedCities[existingCityIndex] = { name, data };
        state.cities = updatedCities;

      } else {

        state.cities.push({ name, data});

      }

          state.weatherData[name] = data;
    },
  },

  extraReducers: (builder) => {

    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;

      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.city = action.payload.city ? action.payload.city.name : '';
        state.weatherData = action.payload.list;
        state.temperature = state.weatherData.map((cityData) => cityData.main.temp);
        state.pressure = state.weatherData.map((cityData) => cityData.main.pressure);
        state.humidity = state.weatherData.map((cityData) => cityData.main.humidity);

      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;

      });
  },
});

export const { setCity } = weatherSlice.actions;

export default weatherSlice.reducer;