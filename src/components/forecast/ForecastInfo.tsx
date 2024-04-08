import { WeatherData } from "../../interfaces/weatherData"
import { getNextDays } from "../../utils";
import './styles.scss';

const ForecastInfo = ({ weatherInfo }: { weatherInfo: WeatherData }) => {

  const forecast = weatherInfo?.list.slice(1, 7);

  const next6Days = getNextDays();

  return (
    <div className="container-forecast">
      <h2 className="section-title">Extended Forecast</h2>
      <div className="container-card-forecast">
        {forecast?.map((day, index) => (
          <div key={index} className="card-forecast">
            <h3>{next6Days[index]}</h3>
            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="weather icon" />
            <p>{day.weather[0].main}</p>
            <span>
              {Math.round(day.temp.max)}°/{Math.round(day.temp.min)}°
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ForecastInfo