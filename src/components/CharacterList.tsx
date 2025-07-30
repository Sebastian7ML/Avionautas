import React from 'react';
import { characters } from './characters';
import './CharacterList.css';

import type { Character } from './characters';

interface CharacterListProps {
  search?: string;
  onSelect?: (character: Character) => void;
}

const CharacterList: React.FC<CharacterListProps> = ({ search = '', onSelect }) => {
  const filtered = characters.filter(char =>
    char.username.toLowerCase().includes(search.toLowerCase()) ||
    char.name.toLowerCase().includes(search.toLowerCase()) ||
    char.licenses.toLowerCase().includes(search.toLowerCase()) ||
    char.description.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="character-list">
      {filtered.map((char) => (
        <div
          className="character-card"
          key={char.id}
          onClick={() => onSelect && onSelect(char)}
          style={{ cursor: onSelect ? 'pointer' : undefined }}
        >
          <img src={char.image} alt={char.username} className="character-image" />
          <div className="character-info">
            <h2>{char.username}</h2>
            <h3>{char.name}</h3>
            <p><strong>Licenses:</strong> {char.licenses}</p>
            <p className="character-description">{char.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
