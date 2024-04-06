import axios from 'axios';

const { VITE_APP_API_FIND, VITE_WEATHER_API_KEY } = import.meta.env;

const search = axios.create({
  baseURL: VITE_APP_API_FIND,
  params: {
    appid: VITE_WEATHER_API_KEY,
    type: 'like',
    sort: 'population',
    cnt: 5,
    lang: 'en',
  },
})

export default search;