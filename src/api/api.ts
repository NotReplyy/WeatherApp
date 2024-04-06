import axios from 'axios';

const { VITE_WEATHER_API_KEY, VITE_APP_API_URL } = import.meta.env;

const apiUrl = axios.create({
  baseURL: VITE_APP_API_URL,
  params: {
    appid: VITE_WEATHER_API_KEY,
    units: 'metric',
    cnt: 7,
    lang: 'en',
  },
});

export default apiUrl;
