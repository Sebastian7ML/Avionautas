export type Character = {
  id: string;
  name: string;
  alias: string;
  universe: string;
  description: string;
  image: string; // relative path to asset
};

export const characters: Character[] = [
  {
    id: 'batman',
    name: 'Bruce Wayne',
    alias: 'Batman',
    universe: 'DC',
    description: 'A vigilante detective and protector of Gotham City.',
    image: '/src/assets/batman.jpg',
  },
  {
    id: 'spiderman',
    name: 'Peter Parker',
    alias: 'Spider-Man',
    universe: 'Marvel',
    description: 'A young superhero with spider-like abilities.',
    image: '/src/assets/spiderman.jpg',
  },
  {
    id: 'venom',
    name: 'Eddie Brock',
    alias: 'Venom',
    universe: 'Marvel',
    description: 'A journalist bonded with an alien symbiote.',
    image: '/src/assets/venom.jpg',
  },
  {
    id: 'wolverine',
    name: 'Logan',
    alias: 'Wolverine',
    universe: 'Marvel',
    description: 'A mutant with healing powers and adamantium claws.',
    image: '/src/assets/wolverine.jpg',
  },
];
