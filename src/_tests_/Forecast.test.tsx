import { render } from '@testing-library/react';
import ForecastInfo from '../components/forecast/ForecastInfo';
import '@testing-library/jest-dom';

const mockWeatherInfo = {
  city: {
    id: 2643743,
    name: 'London',
    coord: { lon: -0.1257, lat: 51.5085 },
    country: 'GB',
    population: 1000000,
    timezone: 3600,
  },
  list: [
    {
      dt: 1649462400,
      sunrise: 1649443143,
      sunset: 1649490299,
      temp: { day: 10.24, min: 7.53, max: 10.98, night: 9.12, eve: 10.98, morn: 8.09 },
      feels_like: { day: 8.92, night: 7.89, eve: 9.96, morn: 6.47 },
      pressure: 1021,
      humidity: 76,
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      speed: 3.36,
      deg: 223,
      gust: 6.34,
      clouds: 89,
      pop: 0.83,
      rain: 0.94,
    },
    {
      dt: 1649548800,
      sunrise: 1649529612,
      sunset: 1649576767,
      temp: { day: 11.24, min: 8.53, max: 11.98, night: 10.12, eve: 11.98, morn: 9.09 },
      feels_like: { day: 9.92, night: 8.89, eve: 10.96, morn: 7.47 },
      pressure: 1021,
      humidity: 76,
      weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
      speed: 3.36,
      deg: 223,
      gust: 6.34,
      clouds: 89,
      pop: 0.83,
    },
    {
      dt: 1649635200,
      sunrise: 1649616079,
      sunset: 1649663235,
      temp: { day: 12.24, min: 9.53, max: 12.98, night: 11.12, eve: 12.98, morn: 10.09 },
      feels_like: { day: 10.92, night: 9.89, eve: 11.96, morn: 8.47 },
      pressure: 1021,
      humidity: 76,
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      speed: 3.36,
      deg: 223,
      gust: 6.34,
      clouds: 89,
      pop: 0.83,
      rain: 0.94,
    }
  ],
};


jest.mock('../utils', () => ({
  getNextDays: jest.fn(() => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']), 
}));

test('renders forecast cards with correct data', () => {
  const { getByText, getAllByAltText } = render(<ForecastInfo weatherInfo={mockWeatherInfo} />);

  expect(getByText('Extended Forecast')).toBeInTheDocument();

  const days = ['Sun', 'Mon'];
  days.forEach((day) => {
    expect(getByText(day)).toBeInTheDocument();
  });

  const weatherIcons = getAllByAltText('weather icon');
  expect(weatherIcons.length).toBe(2);

  mockWeatherInfo.list.slice(1, 6).forEach((day) => {
    expect(getByText(day.weather[0].main)).toBeInTheDocument();
  });

  mockWeatherInfo.list.slice(1, 3).forEach((day) => {
    const temperatureText = `${Math.round(day.temp.max)}°/${Math.round(day.temp.min)}°`;
    expect(getByText(temperatureText)).toBeInTheDocument();
  });
});