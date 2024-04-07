import { useEffect, useState } from 'react';
import { WeatherData } from '../interfaces/weatherData';
import { getWeatherCity } from '../api/getWeatherCity';


export const useWeatherData = (city: string | { lat: number; lon: number }) => {
  const [weatherInfo, setWeatherInfo] = useState<WeatherData | null>(null);

  useEffect(() => {

    const fetchData = async () => {
      if (!city) return;
      try {
        const data = await getWeatherCity(city);
        setWeatherInfo(data);
        localStorage.setItem('weatherInfo', JSON.stringify(data));
      } catch (error) {
        console.error('Error fetching weather information:', error);
      }
    };
    fetchData();
    return () => {
      localStorage.removeItem('weatherInfo');
    };
  }, [city]);

  return weatherInfo;
};
