import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useDebouncer from '../../hooks/useDebouncer';
import { getSuggestion } from '../../api/getSuggestion';
import { SuggestionData } from '../../interfaces/suggestionData';
import './styles.scss'
import { IoLocationOutline } from 'react-icons/io5';

interface SearchBarProps {
  onSearch: (searchTerm: string | { lat: number; lon: number }) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<SuggestionData>({ count: 0, list: [], cod: '', message: '' });
  const [open, setOpen] = useState(false)
  const debouncedSearchTerm = useDebouncer(searchTerm, 1000);

  useEffect(() => {
    const storedSearchTerm = localStorage.getItem('weatherInfo')
    if (storedSearchTerm) {
      const { city } = JSON.parse(storedSearchTerm)
      onSearch(city.name)
    }
  }, [onSearch])


  const getLocation = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;
    onSearch({ lat: latitude, lon: longitude });
    setOpen(false)
    setSearchTerm('');
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      getSuggestion(debouncedSearchTerm.trim()).then((data) => {
        if (data.count === 0) {
          toast.error('City not found');
        } else {
          setSuggestions(data);
          setOpen(true);
        }
      });
    }
  }, [debouncedSearchTerm]);


  return (
    <div className='container-searchbar'>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter city name"
        maxLength={20}
        className='search-input'
      />
      <button
        onClick={() => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getLocation);
          } else {
            toast.error('Geolocation is not supported by this browser.');
          }
        }}
        className='button-location'
      >
        <IoLocationOutline />
        My location
      </button>
      {open && (
        <div className='box-search-suggestions'>
          {suggestions.list.map((result) => {
            const country = result.sys.country;
            const flag = `https://raw.githubusercontent.com/hjnilsson/country-flags/master/png100px/${country.toLowerCase()}.png`;
            return (
              <div
                key={result.coord.lat}
                onClick={() => {
                  setOpen(false);
                  onSearch({ lat: result.coord.lat, lon: result.coord.lon });
                }}
                className="suggestion-item"
              >
                <img src={flag} alt="flag" className="suggestion-item-flag" />
                <p className="suggestion-item-name">{result.name}, {country}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
