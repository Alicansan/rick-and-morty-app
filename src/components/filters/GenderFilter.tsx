'use client';

import { useQueryState } from 'nuqs';
import { parseAsString } from 'nuqs/server';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { GenderFilter } from '@/types/rickAndMorty';

export default function GenderFilterComponent() {
  const [gender, setGender] = useQueryState(
    'gender',
    parseAsString.withDefault('all').withOptions({ shallow: false })
  );

  return (
    <div className="mb-4">
      <label className="mb-1 block text-sm font-medium">Gender</label>
      <Select value={gender} onValueChange={(value) => setGender(value as GenderFilter)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Filter by gender" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="Female">Female</SelectItem>
          <SelectItem value="Male">Male</SelectItem>
          <SelectItem value="Genderless">Genderless</SelectItem>
          <SelectItem value="unknown">Unknown</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
