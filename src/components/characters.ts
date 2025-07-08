export type Character = {
  id: string;
  name: string;
  alias: string;
  universe: string;
  description: string;
  image: string; // relative path to asset
  city?: string;
  coords?: [number, number]; // [lat, lng]
};

export const characters: Character[] = [
  {
    id: 'batman',
    name: 'Bruce Wayne',
    alias: 'Batman',
    universe: 'DC',
    description: 'A vigilante detective and protector of Gotham City.',
    image: '/src/assets/batman.jpg',
    city: 'Gotham City',
    coords: [40.7128, -74.0060], // NYC as Gotham
  },
  {
    id: 'spiderman',
    name: 'Peter Parker',
    alias: 'Spider-Man',
    universe: 'Marvel',
    description: 'A young superhero with spider-like abilities.',
    image: '/src/assets/spiderman.jpg',
    city: 'New York City',
    coords: [40.7128, -74.0060],
  },
  {
    id: 'venom',
    name: 'Eddie Brock',
    alias: 'Venom',
    universe: 'Marvel',
    description: 'A journalist bonded with an alien symbiote.',
    image: '/src/assets/venom.jpg',
    city: 'New York City',
    coords: [40.7128, -74.0060],
  },
  {
    id: 'wolverine',
    name: 'Logan',
    alias: 'Wolverine',
    universe: 'Marvel',
    description: 'A mutant with healing powers and adamantium claws.',
    image: '/src/assets/wolverine.jpg',
    city: 'Alberta',
    coords: [53.9333, -116.5765],
  },
  {
    id: 'ironman',
    name: 'Tony Stark',
    alias: 'Iron Man',
    universe: 'Marvel',
    description: 'A genius billionaire inventor in a high-tech armored suit.',
    image: '/src/assets/ironman.png',
    city: 'Malibu',
    coords: [34.0259, -118.7798],
  },
  {
    id: 'loki',
    name: 'Loki Laufeyson',
    alias: 'Loki',
    universe: 'Marvel',
    description: 'The god of mischief, known for his cunning and trickery.',
    image: '/src/assets/loki.jpg',
    city: 'Asgard',
    coords: [59.3293, 18.0686], // Stockholm as placeholder
  },
  {
    id: 'hulk',
    name: 'Bruce Banner',
    alias: 'Hulk',
    universe: 'Marvel',
    description: 'A scientist who transforms into a powerful green giant when angry.',
    image: '/src/assets/hulk.jpg',
    city: 'Dayton',
    coords: [39.7589, -84.1916],
  },
  {
    id: 'joker',
    name: 'Unknown',
    alias: 'Joker',
    universe: 'DC',
    description: 'The chaotic and unpredictable arch-nemesis of Batman.',
    image: '/src/assets/joker.jpg',
    city: 'Gotham City',
    coords: [40.73, -74.30],
  },
  {
    id: 'aquaman',
    name: 'Arthur Curry',
    alias: 'Aquaman',
    universe: 'DC',
    description: 'The king of Atlantis with the power to control the seas.',
    image: '/src/assets/aquaman.png',
    city: 'Atlantis',
    coords: [31.1313, -24.0376], // Atlantic Ocean
  },
];
