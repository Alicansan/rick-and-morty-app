'use client';

import { Character } from '@/types/rickAndMorty';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { useCharactersStore } from '@/store/characterStore';

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const { setSelectedCharacterId, selectedCharacterId } = useCharactersStore();
  const isSelected = selectedCharacterId === character.id;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Alive':
        return 'bg-green-500 hover:bg-green-600';
      case 'Dead':
        return 'bg-red-500 hover:bg-red-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <Card
      className={`cursor-pointer overflow-hidden transition-all hover:shadow-lg ${
        isSelected ? 'ring-primary ring-2' : ''
      }`}
      onClick={() => setSelectedCharacterId(isSelected ? null : character.id)}
    >
      <div className="relative h-48 w-full">
        <Image
          src={character.image}
          alt={character.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
      </div>
      <CardHeader className="p-4 pb-2">
        <div className="flex items-start justify-between">
          <h3 className="truncate text-lg font-bold">{character.name}</h3>
          <Badge className={getStatusColor(character.status)}>{character.status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Species:</span>
            <span>{character.species}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Gender:</span>
            <span>{character.gender}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Origin:</span>
            <span className="max-w-[150px] truncate">{character.origin.name}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
