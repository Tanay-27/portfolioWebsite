import React from 'react'
import { Link } from "react-router-dom";
import './gamesStyle.scss';
import tictactoeImage from '../images/tictactoe.jpg';
import hangmanImage from '../images/hangman.jpg';

const games = [
  { name: 'Tic Tac Toe', to: '/games/tictactoe', image: tictactoeImage },
  { name: 'Hangman', to: '/games/hangman', image: hangmanImage },
];

function Games() {
  return (
    <div className='gamesComponent page'>
      <div className="pageHeader">Games</div>
      <div className="gamesCardContainer">
        {games.map((g) => (
          <div className="gameCard" key={g.name}>
            <div className="img"><img src={g.image} alt={g.name} /></div>
            <div className="name">{g.name}</div>
            <div className="goToGame"><Link to={g.to}>Play</Link></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Games
