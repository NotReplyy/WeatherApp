import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import CurrentWeather from '../components/currentWeather/CurrentWeather';

describe('CurrentWeather component', () => {
  const weatherInfoMock = {
    city: {
      id: 1,
      name: 'Test City',
      coord: { lon: 0, lat: 0 },
      country: 'Test Country',
      population: 100000,
      timezone: 0,
    },
    list: [
      {
        dt: 0,
        sunrise: 0,
        sunset: 0,
        temp: { day: 20, min: 15, max: 25, night: 0, eve: 0, morn: 0 },
        feels_like: { day: 22, night: 0, eve: 0, morn: 0 },
        pressure: 1013,
        humidity: 50,
        weather: [{ id: 800, main: 'Clear', description: 'Test Weather Description', icon: '01d' }],
        speed: 10,
        deg: 0,
        gust: 0,
        clouds: 0,
        pop: 0,
      },
    ],
  };
  

  it('renders city name correctly', () => {
    const { getByText } = render(<CurrentWeather weatherInfo={weatherInfoMock} />);
    expect(getByText('Test City')).toBeInTheDocument();
  });

  it('renders weather description correctly', () => {
    const { getByText } = render(<CurrentWeather weatherInfo={weatherInfoMock} />);
    expect(getByText('Test Weather Description')).toBeInTheDocument();
  });

  it('renders temperature correctly', () => {
    const { getByText } = render(<CurrentWeather weatherInfo={weatherInfoMock} />);
    expect(getByText('20°C')).toBeInTheDocument();
  });

  it('renders max and min temperature correctly', () => {
    const { getByText } = render(<CurrentWeather weatherInfo={weatherInfoMock} />);
    expect(getByText('Max 25°C')).toBeInTheDocument();
    expect(getByText('Min 15°C')).toBeInTheDocument();
  });

  it('renders feels like temperature correctly', () => {
    const { getByText } = render(<CurrentWeather weatherInfo={weatherInfoMock} />);
    expect(getByText('Feels like 22°C')).toBeInTheDocument();
  });

  it('renders humidity correctly', () => {
    const { getByText } = render(<CurrentWeather weatherInfo={weatherInfoMock} />);
    expect(getByText('Humidity')).toBeInTheDocument();
    expect(getByText('50%')).toBeInTheDocument();
  });

  it('renders pressure correctly', () => {
    const { getByText } = render(<CurrentWeather weatherInfo={weatherInfoMock} />);
    expect(getByText('Pressure')).toBeInTheDocument();
    expect(getByText('1013 hPa')).toBeInTheDocument();
  });

  it('renders wind speed correctly', () => {
    const { getByText } = render(<CurrentWeather weatherInfo={weatherInfoMock} />);
    expect(getByText('Wind')).toBeInTheDocument();
    expect(getByText('36 km/h')).toBeInTheDocument();
  });
});
