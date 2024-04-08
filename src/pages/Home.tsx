import { useState } from "react";
import CurrentWeather from "../components/currentWeather/CurrentWeather";
import SearchBar from "../components/searchBar/SearchBar";
import { useWeatherData } from "../hooks/useWeatherData";
import ForecastInfo from "../components/forecast/ForecastInfo";
import './styles.scss';
import CitiesWanted from "../components/popularCities/PopularCities";

const Home = () => {
  const [city, setCity] = useState('' as string | { lat: number; lon: number });

  const handleSearch = (searchTerm: string | { lat: number; lon: number }) => {
    setCity(searchTerm);
  };

  const weatherInfo = useWeatherData(city);

  return (
    <div className="container-app">
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      <CitiesWanted onSearch={handleSearch} />
      {weatherInfo &&
        <>
          <CurrentWeather weatherInfo={weatherInfo!} />
          <ForecastInfo weatherInfo={weatherInfo!} />
        </>
      }
    </div>
  );
};

export default Home;
