import './styles.scss';

interface PopularCitiesProps {
  onSearch: (searchTerm: string | { lat: number; lon: number }) => void;
}

const PopularCities = ({ onSearch }: PopularCitiesProps) => {

  const cities = [
    { name: 'London' },
    { name: 'New York' },
    { name: 'Tokyo' },
    { name: 'Paris' },
    { name: 'Berlin' },
    { name: 'Madrid' },
    { name: 'Sydney' },
    { name: 'Buenos Aires' },
  ];

  return (
    <div>
      <div className='container-cities'>
        {cities.map((city, index) => (
          <button
            key={index}
            onClick={() => onSearch(city.name)}
            className='button-city'
          >
            {city.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PopularCities;
