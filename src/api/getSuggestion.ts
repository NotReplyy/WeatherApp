import search from './search';

export const getSuggestion = async (searchTerm: string) => {
  try {
    const response = await search.get(`?q=${searchTerm}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

