import { render, fireEvent } from '@testing-library/react';
import PopularCities from '../components/popularCities/PopularCities';
import '@testing-library/jest-dom';

const mockOnSearch = jest.fn();

test('renders popular cities buttons', () => {

  const { getByText } = render(<PopularCities onSearch={mockOnSearch} />);

  const cities = ['London', 'New York', 'Tokyo', 'Paris', 'Berlin', 'Madrid', 'Sydney', 'Buenos Aires'];
  cities.forEach((city) => {
    const button = getByText(city);
    expect(button).toBeInTheDocument();
  });
});

test('calls onSearch with correct city name when a city button is clicked', () => {

  const { getByText } = render(<PopularCities onSearch={mockOnSearch} />);

  const cityButton = getByText('London');
  fireEvent.click(cityButton);

  expect(mockOnSearch).toHaveBeenCalledWith('London');
});
