'use client';

import StatusFilter from './StatusFilter';
import GenderFilter from './GenderFilter';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function FilterSection() {
  const router = useRouter();

  const resetFilters = () => {
    router.push('/', { scroll: false });
  };

  return (
    <div className="mb-6 rounded-lg bg-white p-4 shadow dark:bg-gray-800">
      <h2 className="mb-4 text-lg font-semibold">Filters</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <StatusFilter />
        <GenderFilter />
      </div>
      <Button variant="outline" onClick={resetFilters} className="mt-4 w-full">
        Reset Filters
      </Button>
    </div>
  );
}
