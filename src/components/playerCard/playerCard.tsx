import React from 'react';
import styles from './playerCard.module.css';

interface Player {
  id: number;
  name: string;
  country: string;
  club: string;
}

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = function PlayerCardComponent({ player }) {
  const { name, country, club } = player;

  return (
    <div className={styles.card}>
      <img className={styles.playerImg} src={`https://source.unsplash.com/200x200/?soccer,${name}`} alt={name} />
      <div className={styles.details}>
        <img className={styles.countryImg} src={`https://source.unsplash.com/50x50/?${country}`} alt={country} />
        <img className={styles.clubImg} src={`https://source.unsplash.com/50x50/?${club}`} alt={club} />
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default PlayerCard;
