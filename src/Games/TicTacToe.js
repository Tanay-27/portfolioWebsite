import { useState } from 'react';
import './gamesStyle.scss';
import { faRepeat} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Square({value, onSquareClick}){
    return <button className="square" onClick={onSquareClick} >{value}</button>; 
}

function Board({isXNext, squares, onPlay,reset}) {
    const winner = calculateWinner(squares);
    function handleClick(i){
        if( winner || squares[i]) return;
        const nextSquares = squares.slice();
        nextSquares[i] = isXNext?"X":"O";
        onPlay(nextSquares);
    }

    return (
        <>
        <div className="status">{winner?"Winner: "+winner:"Next Player: "+(isXNext?"X":"O") } </div>
        <div className="boardCnntainer">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
          <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
          <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
          <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
          <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
          <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
          <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
        </div>
        </div>
      </>
    );
}

export default function Game(){
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const isXNext = currentMove %2 === 0;
    
    function handlePlay(nextSquares){
        const nextHistory = [...history.slice(0,currentMove+1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length-1);
    }

    function jumpTo(nextMove){
        setCurrentMove(nextMove);
    }  

    // const moves = history.map((square, move) => {
    //     return (
    //         <li key={move}><button onClick={() => jumpTo(move)}>{move>0?`Go to move #${move}`:"Go to game start"}</button></li>
    //     );
    // });

    return (
        <div className="game">
            <div className="game-board"> <Board isXNext={isXNext} squares={currentSquares} onPlay={handlePlay} /></div>
            <span className="button" onClick={() => jumpTo(0)}><FontAwesomeIcon icon={faRepeat} /></span>
            {/* <div className="game-info">
                <ol>{moves}</ol>
            </div> */}
        </div>
    );
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }