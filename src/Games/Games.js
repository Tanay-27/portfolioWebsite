import React from 'react'
import { Link } from "react-router-dom";
import './gamesStyle.scss';
import tictactoeImage from '../images/tictactoe.jpg';
import hangmanImage from '../images/hangman.jpg';

function Games() {
  return (
    <div className='gamesComponent'>
        <div className="pageHeader">Games</div>
        <div className="gamesCardContainer">
            <div className="gameCard">
                <div className="img"><img src={tictactoeImage} alt="Tic Tac Toe" /></div>
                <div className="name">Tic Tac Toe</div>
                <div className="goToGame"><Link to="/games/tictactoe">Play</Link></div>      
            </div>

            <div className="gameCard">
                <div className="img">,<img src={hangmanImage} alt="Hangman" /></div>
                <div className="name">Hangman</div>
                <div className="goToGame disabled"><Link to="/games/hangman">Coming Soon</Link></div>
            </div>
            
        </div>
    </div>
  )
}

export default Games