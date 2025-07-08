import './App.css'
import CharacterList from './components/CharacterList';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import type { Character } from './components/characters';
import CharacterProfile from './components/CharacterProfile';
import MapView from './components/MapView';
import GalaxyBackground from './components/GalaxyBackground';

function App() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Character | null>(null);
  return (
    <>
      <GalaxyBackground />
      <MapView />
      <SearchBar value={search} onChange={setSearch} />
      <CharacterList search={search} onSelect={setSelected} />
      {selected && (
        <CharacterProfile character={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}

export default App
