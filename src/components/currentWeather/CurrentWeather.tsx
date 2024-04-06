import { IoArrowDownOutline, IoWater } from "react-icons/io5";
import { WeatherData } from "../../interfaces/weatherData";
import { changeUnitWind } from "../../utils";
import './styles.scss';
import { FaWind } from "react-icons/fa";

const CurrentWeather = ({ weatherInfo }: { weatherInfo: WeatherData }) => {
  const currentWeather = weatherInfo?.list[0];

  return (
    <div className="weather-container">
      <div className="section-title">{weatherInfo?.city?.name}</div>
      <div className="current-weather-container">
        <div className="current-weather-status">
          <div className="status-img-temp">
            <img src={`http://openweathermap.org/img/wn/${currentWeather?.weather[0]?.icon}.png`} alt="weather icon" />
            <span>{Math.round(currentWeather?.temp.day)}°C</span>
          </div>
          <h6>{currentWeather?.weather[0]?.description}</h6>
        </div>
        <div className="current-weather-info">
          <p className="feels-like">Feels like {Math.round(currentWeather?.feels_like.day)}°C</p>
          <div className="high-low-container">
            <div className="weather-degree">
              <span>Max {Math.round(currentWeather?.temp.max)}°C</span>
              <span>Min {Math.round(currentWeather?.temp.min)}°C</span>
            </div>
            <div className="info-row">
              <div>
              <IoWater />
                <span>Humidity</span>
              </div>
              <span>{currentWeather?.humidity}%</span>
            </div>
            <div className="info-row">
              <div>
              <IoArrowDownOutline />
                <span>Pressure</span>
              </div>
              <span>{currentWeather?.pressure} hPa</span>
            </div>
            <div className="info-row">
              <div>
              <FaWind />
                <span>Wind</span>
              </div>
              <span>{changeUnitWind(currentWeather?.speed)} km/h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
