'use client';

import CharacterCard from './CharacterCard';
import { Character } from '@/types/rickAndMorty';
import { useQueryState } from 'nuqs';
import { parseAsString, parseAsInteger } from 'nuqs/server';
import { useCharacters } from '@/hooks/useCharacters';
import { Skeleton } from '@/components/ui/skeleton';

export default function CharacterList() {
  const [status] = useQueryState('status', parseAsString);
  const [gender] = useQueryState('gender', parseAsString);
  const [page] = useQueryState(
    'page',
    parseAsInteger.withDefault(1).withOptions({ shallow: false })
  );

  const { data, isLoading, isError } = useCharacters({
    status: status as any,
    gender: gender as any,
    page,
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="space-y-3">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-8 text-center">
        <h3 className="text-xl font-semibold text-red-500">Error loading characters</h3>
        <p className="mt-2">Please try again later or adjust your filters</p>
      </div>
    );
  }

  if (!data || data.results.length === 0) {
    return (
      <div className="py-8 text-center">
        <h3 className="text-xl font-semibold">No characters found</h3>
        <p className="mt-2">Try adjusting your filters to see more results</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.results.map((character: Character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
