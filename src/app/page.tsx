import { unstable_noStore as noStore } from 'next/cache';
import FilterSection from '@/components/filters/FilterSection';
import CharacterList from '@/components/characters/CharacterList';
import CharacterPagination from '@/components/characters/CharacterPagination';

export default function Home() {
  noStore();

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-4xl font-bold">Rick and Morty Explorer</h1>
        <p className="text-muted-foreground text-xl">
          Explore characters from the Rick and Morty series
        </p>
      </div>

      <FilterSection />
      <CharacterList />
      <CharacterPagination />
    </main>
  );
}
