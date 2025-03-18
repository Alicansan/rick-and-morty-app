// components/characters/CharacterPagination.tsx
'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { parseAsString, parseAsInteger } from 'nuqs/server';
import { useCharacters } from '@/hooks/useCharacters';
import { GenderFilter, StatusFilter } from '@/types/rickAndMorty';

export default function CharacterPagination() {
  const [status] = useQueryState('status', parseAsString);
  const [gender] = useQueryState('gender', parseAsString);
  const [page, setPage] = useQueryState(
    'page',
    parseAsInteger.withDefault(1).withOptions({ shallow: false })
  );

  const { data, isLoading } = useCharacters({
    status: status as StatusFilter,
    gender: gender as GenderFilter,
    page,
  });

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (data?.info.next) {
      setPage(page + 1);
    }
  };

  if (isLoading || !data || data.results.length === 0) {
    return null;
  }

  return (
    <div className="my-6 flex items-center justify-between">
      <div className="text-muted-foreground text-sm">
        Page {page} of {data.info.pages}
      </div>

      <div className="flex space-x-2">
        <Button variant="outline" size="icon" onClick={handlePreviousPage} disabled={page <= 1}>
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button variant="outline" size="icon" onClick={handleNextPage} disabled={!data?.info.next}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
