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
  {
    id: 'ironman',
    name: 'Tony Stark',
    alias: 'Iron Man',
    universe: 'Marvel',
    description: 'A genius billionaire inventor in a high-tech armored suit.',
    image: '/src/assets/ironman.png',
  },
  {
    id: 'loki',
    name: 'Loki Laufeyson',
    alias: 'Loki',
    universe: 'Marvel',
    description: 'The god of mischief, known for his cunning and trickery.',
    image: '/src/assets/loki.jpg',
  },
  {
    id: 'hulk',
    name: 'Bruce Banner',
    alias: 'Hulk',
    universe: 'Marvel',
    description: 'A scientist who transforms into a powerful green giant when angry.',
    image: '/src/assets/hulk.jpg',
  },
  {
    id: 'joker',
    name: 'Unknown',
    alias: 'Joker',
    universe: 'DC',
    description: 'The chaotic and unpredictable arch-nemesis of Batman.',
    image: '/src/assets/joker.jpg',
  },
  {
    id: 'aquaman',
    name: 'Arthur Curry',
    alias: 'Aquaman',
    universe: 'DC',
    description: 'The king of Atlantis with the power to control the seas.',
    image: '/src/assets/aquaman.png',
  },
];
