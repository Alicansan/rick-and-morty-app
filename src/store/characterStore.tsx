import { create } from 'zustand';
import { CharacterFilters } from '@/types/rickAndMorty';

interface CharactersState {
  selectedCharacterId: number | null;
  setSelectedCharacterId: (id: number | null) => void;
}

export const useCharactersStore = create<CharactersState>()((set) => ({
  selectedCharacterId: null,
  setSelectedCharacterId: (id) => set({ selectedCharacterId: id }),
}));
