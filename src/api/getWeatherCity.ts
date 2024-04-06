import apiUrl from "./api";

export const getWeatherCity = async (city: string | { lat: number, lon: number }) => {
  let url = `?q=${city}`;

  if (typeof city === 'object') {
    url = `?lat=${city.lat}&lon=${city.lon}`;
  }
  const response = await apiUrl.get(url);
  return response.data;
};
