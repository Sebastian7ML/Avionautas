# Avionautas Project

Avionautas is a responsive React + TypeScript web application built with Vite. Its main goal is to help you find aeronautical personnel around the world. The app displays a list of aviation professionals (mechanics, technicians, pilots, etc.) with their images, details, and locations, and includes a search bar to filter people in real time.

## Features

- **Responsive Design:** Works on desktop, tablet, and mobile devices.
- **Personnel List:** Shows cards with images, names, roles, licenses, locations, and descriptions of aeronautical professionals.
- **Search Bar:** Instantly filters the personnel list as you type (by name, alias, license, city, or description).
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
- Add or edit personnel in `src/components/characters.ts`.
- Place new profile images in `src/assets/` and update the image path in the personnel object.
- Adjust styles in `CharacterList.css` and `SearchBar.css` as needed.

## License
This project is for educational/demo purposes.

