export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

export type StatusFilter = 'Alive' | 'Dead' | 'unknown' | '';
export type GenderFilter = 'Female' | 'Male' | 'Genderless' | 'unknown' | '';

export interface CharacterFilters {
  status?: StatusFilter;
  gender?: GenderFilter;
  page?: number;
}
