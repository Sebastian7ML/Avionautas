export type Character = {
  id: number;
  name: string;
  username: string;
  licenses: string;
  description: string;
  image: string; // relative path to asset
  city?: string;
  coords?: [number, number]; // [lat, lng]
};


const rawCharacters = [
  {
    name: 'Ivan Sanchez',
    username: 'IvanS',
    licenses: 'B1 / TMA',
    description: 'Aircraft mechanic with a passion for Cirrus aircraft.',
    image: '/src/assets/ivan.jpg',
    city: 'Sabadell',
    coords: [41.5177, 2.101], // Sabadell Airport
  },
  {
    name: 'Sebastian Mejia',
    username: 'Sebastian7ML',
    licenses: 'B2 / TMA',
    description: 'Avionics technician with experience in Garmin suites.',
    image: '/src/assets/sebas.jpg',
    city: 'Sabadell',
    coords: [41.5167, 2.1000], // Sabadell Airport
  },
  {
    name: 'Bruce Wayne',
    username: 'Batman',
    licenses: 'DC',
    description: 'A vigilante detective and protector of Gotham City.',
    image: '/src/assets/batman.jpg',
    city: 'Gotham City',
    coords: [40.7128, -74.0060], // NYC as Gotham
  },
  {
    name: 'Peter Parker',
    username: 'Spider-Man',
    licenses: 'Marvel',
    description: 'A young superhero with spider-like abilities.',
    image: '/src/assets/spiderman.jpg',
    city: 'New York City',
    coords: [40.7128, -74.0060],
  },
  {
    name: 'Eddie Brock',
    username: 'Venom',
    licenses: 'Marvel',
    description: 'A journalist bonded with an alien symbiote.',
    image: '/src/assets/venom.jpg',
    city: 'New York City',
    coords: [40.7128, -74.0060],
  },
  {
    name: 'Logan',
    username: 'Wolverine',
    licenses: 'Marvel',
    description: 'A mutant with healing powers and adamantium claws.',
    image: '/src/assets/wolverine.jpg',
    city: 'Alberta',
    coords: [53.9333, -116.5765],
  },
  {
    name: 'Tony Stark',
    username: 'Iron Man',
    licenses: 'Marvel',
    description: 'A genius billionaire inventor in a high-tech armored suit.',
    image: '/src/assets/ironman.png',
    city: 'Malibu',
    coords: [34.0259, -118.7798],
  },
  {
    name: 'Loki Laufeyson',
    username: 'Loki',
    licenses: 'Marvel',
    description: 'The god of mischief, known for his cunning and trickery.',
    image: '/src/assets/loki.jpg',
    city: 'Asgard',
    coords: [59.3293, 18.0686], // Stockholm as placeholder
  },
  {
    name: 'Bruce Banner',
    username: 'Hulk',
    licenses: 'Marvel',
    description: 'A scientist who transforms into a powerful green giant when angry.',
    image: '/src/assets/hulk.jpg',
    city: 'Dayton',
    coords: [39.7589, -84.1916],
  },
  {
    name: 'Unknown',
    username: 'Joker',
    licenses: 'DC',
    description: 'The chaotic and unpredictable arch-nemesis of Batman.',
    image: '/src/assets/joker.jpg',
    city: 'Gotham City',
    coords: [40.73, -74.30],
  },
  {
    name: 'Arthur Curry',
    username: 'Aquaman',
    licenses: 'DC',
    description: 'The king of Atlantis with the power to control the seas.',
    image: '/src/assets/aquaman.png',
    city: 'Atlantis',
    coords: [31.1313, -24.0376], // Atlantic Ocean
  },
  
];

export const characters: Character[] = rawCharacters.map((char, idx) => ({
  ...char,
  id: idx + 1,
  coords: char.coords as [number, number],
}));
