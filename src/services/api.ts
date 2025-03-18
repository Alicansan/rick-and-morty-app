import { ApiResponse, CharacterFilters } from '@/types/rickAndMorty';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async (filters: CharacterFilters): Promise<ApiResponse> => {
  const queryParams = new URLSearchParams();

  if (filters.status) {
    queryParams.append('status', filters.status);
  }

  if (filters.gender) {
    queryParams.append('gender', filters.gender);
  }

  if (filters.page) {
    queryParams.append('page', String(filters.page));
  }

  const queryString = queryParams.toString() ? `?${queryParams.toString()}` : '';
  const response = await fetch(`${BASE_URL}/character${queryString}`, { cache: 'no-store' });

  if (!response.ok) {
    if (response.status === 404) {
      return {
        info: {
          count: 0,
          pages: 0,
          next: null,
          prev: null,
        },
        results: [],
      };
    }
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json();
};
