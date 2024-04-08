import { render, fireEvent, waitFor, act } from '@testing-library/react';
import SearchBar from '../components/searchBar/SearchBar';
import { getSuggestion } from '../api/getSuggestion';
import '@testing-library/jest-dom';

jest.mock('../api/getSuggestion');

describe('SearchBar', () => {
  test('performs search when typing in search input', async () => {
    const mockSuggestions = {
      count: 5,
      list: [
        { name: 'Berlin', sys: { country: 'DE' }, coord: { lat: 52.5244, lon: 13.4105 } },
        { name: 'Berlín', sys: { country: 'SV' }, coord: { lat: 13.5, lon: -88.5333 } },
      ],
      cod: '200',
      message: 'success'
    };
    (getSuggestion as jest.Mock).mockResolvedValue(mockSuggestions);

    const mockOnSearch = jest.fn();
    const { getByPlaceholderText, getByText } = render(<SearchBar onSearch={mockOnSearch} />);

    const inputElement = getByPlaceholderText('Enter city name');

    act(() => {
      fireEvent.change(inputElement, { target: { value: 'Berlin' } });
    });

    await waitFor(() => {
      act(() => {
        jest.advanceTimersByTime(500);
      });
    });

    await waitFor(() => getByText('Berlin, DE'));

    act(() => {
      fireEvent.click(getByText('Berlin, DE'));
    });

    expect(getSuggestion).toHaveBeenCalledWith('Berlin');
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith({ lat: 52.5244, lon: 13.4105 });
  });
});
