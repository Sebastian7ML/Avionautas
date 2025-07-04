# Avionautas Project

Avionautas is a responsive React + TypeScript web application built with Vite. It displays a list of popular superhero characters and villains (Batman, Spiderman, Venom, Wolverine) with images and details, and includes a search bar to filter characters in real time.

## Features

- **Responsive Design:** Works on desktop, tablet, and mobile devices.
- **Character List:** Shows cards with superhero images, names, aliases, universes, and descriptions.
- **Search Bar:** Instantly filters the character list as you type.
- **Modern Stack:** Built with React, TypeScript, and Vite for fast development and hot module replacement.

## Project Structure

```
├── public/
│   └── vite.svg
├── src/
│   ├── assets/           # Character images (batman.png, spiderman.png, etc.)
│   ├── components/
│   │   ├── CharacterList.tsx
│   │   ├── CharacterList.css
│   │   ├── SearchBar.tsx
│   │   ├── SearchBar.css
│   │   └── characters.ts
│   ├── App.tsx
│   ├── App.css
│   └── ...
├── index.html
├── package.json
└── ...
```

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Customization
- Add or edit characters in `src/components/characters.ts`.
- Place new character images in `src/assets/` and update the image path in the character object.
- Adjust styles in `CharacterList.css` and `SearchBar.css` as needed.

## License
This project is for educational/demo purposes.

