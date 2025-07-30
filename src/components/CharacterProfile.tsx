import React from 'react';
import './CharacterProfile.css';
import type { Character } from './characters';

interface CharacterProfileProps {
  character: Character;
  onClose: () => void;
}

const CharacterProfile: React.FC<CharacterProfileProps> = ({ character, onClose }) => {
  return (
    <div className="profile-overlay" onClick={onClose}>
      <div className="profile-modal" onClick={e => e.stopPropagation()}>
        <button className="profile-close" onClick={onClose} aria-label="Close profile">&times;</button>
        <div className="profile-header">
          <img src={character.image} alt={character.username} className="profile-image-large" />
          <div className="profile-username">{character.username}</div>
          <div className="profile-licenses-badge">{character.licenses}</div>
        </div>
        <div className="profile-body">
          <div className="profile-realname">{character.name}</div>
          <div className="profile-divider" />
          <div className="profile-description-large">{character.description}</div>
          {character.experience && character.experience.length > 0 && (
            <ul className="profile-experience-list">
              {character.experience.map((exp, i) => (
                <li key={i}>{exp}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterProfile;
