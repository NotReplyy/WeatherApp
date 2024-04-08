import { act } from 'react-dom/test-utils'; 
import { getWeatherCity } from '../api/getWeatherCity';

jest.mock('../api/getWeatherCity');
jest.mock('../api/api');

describe('useWeatherData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should fetch weather data and store in state', async () => {
    const mockWeatherData = {
      city: {
        name: 'London',
        coord: { lon: -0.1257, lat: 51.5085 },
      },
      list: [
        {
          dt: 1649462400,
          temp: { day: 10.24, min: 7.53, max: 10.98 },
          weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
        },
      ],
    };

    
    (getWeatherCity as jest.MockedFunction<typeof getWeatherCity>).mockResolvedValue(mockWeatherData);

    let weatherInfo;
    const fetchData = async () => {
      try {
        weatherInfo = await getWeatherCity('London');
      } catch (error) {
        console.error('Error fetching weather information:', error);
      }
    };

    await act(async () => {
      await fetchData();
    });

    expect(weatherInfo).toEqual(mockWeatherData); 
  });

  
});
