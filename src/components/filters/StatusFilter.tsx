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
import { StatusFilter } from '@/types/rickAndMorty';

export default function StatusFilterComponent() {
  const [status, setStatus] = useQueryState(
    'status',
    parseAsString.withDefault('all').withOptions({ shallow: false })
  );

  return (
    <div className="mb-4">
      <label className="mb-1 block text-sm font-medium">Status</label>
      <Select value={status} onValueChange={(value) => setStatus(value as StatusFilter)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="Alive">Alive</SelectItem>
          <SelectItem value="Dead">Dead</SelectItem>
          <SelectItem value="unknown">Unknown</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
