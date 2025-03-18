import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '@/services/api';
import { CharacterFilters } from '@/types/rickAndMorty';

export const useCharacters = (filters: CharacterFilters) => {
  return useQuery({
    queryKey: ['characters', filters],
    queryFn: () => fetchCharacters(filters),
  });
};
