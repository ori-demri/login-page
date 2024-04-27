import React from 'react';
import { useNavigate } from 'react-router-dom';
import PlayerCard from '../../components/playerCard/playerCard.tsx';
import styles from './dashboard.module.css';

function Dashboard() {
  const navigate = useNavigate();

  // Mock list of famous football players
  const players = [
    {
      id: 1, name: 'Lionel Messi', country: 'Argentina', club: 'Paris Saint-Germain',
    },
    {
      id: 2, name: 'Cristiano Ronaldo', country: 'Portugal', club: 'Manchester United',
    },
    {
      id: 3, name: 'Neymar Jr.', country: 'Brazil', club: 'Paris Saint-Germain',
    },
    {
      id: 4, name: 'Kylian Mbappé', country: 'France', club: 'Paris Saint-Germain',
    },
    {
      id: 5, name: 'Robert Lewandowski', country: 'Poland', club: 'Bayern Munich',
    },
    {
      id: 6, name: 'Kevin De Bruyne', country: 'Belgium', club: 'Manchester City',
    },
    {
      id: 7, name: 'Sergio Ramos', country: 'Spain', club: 'Paris Saint-Germain',
    },
    {
      id: 8, name: 'Mohamed Salah', country: 'Egypt', club: 'Liverpool',
    },
    {
      id: 9, name: 'Harry Kane', country: 'England', club: 'Tottenham Hotspur',
    },
    {
      id: 10, name: 'Luka Modrić', country: 'Croatia', club: 'Real Madrid',
    },
    {
      id: 11, name: 'Eden Hazard', country: 'Belgium', club: 'Real Madrid',
    },
    {
      id: 12, name: 'Gareth Bale', country: 'Wales', club: 'Real Madrid',
    },
    {
      id: 13, name: 'Antoine Griezmann', country: 'France', club: 'Barcelona',
    },
    {
      id: 14, name: 'Paul Pogba', country: 'France', club: 'Manchester United',
    },
    {
      id: 15, name: 'Sadio Mané', country: 'Senegal', club: 'Liverpool',
    },
    {
      id: 16, name: 'Virgil van Dijk', country: 'Netherlands', club: 'Liverpool',
    },
    {
      id: 17, name: 'Sergio Agüero', country: 'Argentina', club: 'Barcelona',
    },
    {
      id: 18, name: 'Toni Kroos', country: 'Germany', club: 'Real Madrid',
    },
    {
      id: 19, name: 'Raheem Sterling', country: 'England', club: 'Manchester City',
    },
    {
      id: 20, name: 'Karim Benzema', country: 'France', club: 'Real Madrid',
    },
    {
      id: 21, name: 'Thiago Alcântara', country: 'Spain', club: 'Liverpool',
    },
    {
      id: 22, name: 'David Alaba', country: 'Austria', club: 'Real Madrid',
    },
    {
      id: 23, name: 'Jamie Vardy', country: 'England', club: 'Leicester City',
    },
    {
      id: 24, name: 'Marco Reus', country: 'Germany', club: 'Borussia Dortmund',
    },
    {
      id: 25, name: 'Ciro Immobile', country: 'Italy', club: 'Lazio',
    },
    {
      id: 26, name: 'Kai Havertz', country: 'Germany', club: 'Chelsea',
    },
    {
      id: 27, name: 'Son Heung-min', country: 'South Korea', club: 'Tottenham Hotspur',
    },
    {
      id: 28, name: 'Roberto Firmino', country: 'Brazil', club: 'Liverpool',
    },
    {
      id: 29, name: 'Erling Haaland', country: 'Norway', club: 'Borussia Dortmund',
    },
    {
      id: 30, name: 'Jadon Sancho', country: 'England', club: 'Manchester United',
    },
  ];

  const getUsername = (): string => {
    const username = 'Ori Demri';
    return ` ${username}`;
  };

  const logout = () => {
    navigate('/login');
  };

  return (
    <div className={styles.background}>
      <main>
        <div className={styles.titleContainer}>
          <button className={styles.logoutBtn} onClick={logout} type="button">Logout</button>
          <h1>
            {' '}
            Hello
            {getUsername()}
          </h1>
        </div>
        <div className={styles.dashboard}>
          {players.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
