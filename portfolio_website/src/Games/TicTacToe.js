import './gamesStyle.css'
import { useState } from 'react';

function Square({value, onSquareClick}){
    return <button className="square" onClick={onSquareClick} >{value}</button>; 
}

function Board({isXNext, squares, onPlay}) {
    const winner = calculateWinner(squares);
    function handleClick(i){
        if( winner || squares[i]) return;
        const nextSquares = squares.slice();
        nextSquares[i] = isXNext?"X":"O";
        onPlay(nextSquares);
    }
    return (
        <>
        <div className="status">{winner?"Winner: "+winner:"Next Player: "+(isXNext?"X":"O") }</div>
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

    const moves = history.map((square, move) => {
        return (
            <li key={move}><button onClick={() => jumpTo(move)}>{move>0?`Go to move #${move}`:"Go to game start"}</button></li>
        );
    });

    return (
        <div className="game">
            <div className="game-board"> <Board isXNext={isXNext} squares={currentSquares} onPlay={handlePlay} /></div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
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

let todo =  `For the current move only, show “You are at move #…” instead of a button.
  Rewrite Board to use two loops to make the squares instead of hardcoding them.
  Add a toggle button that lets you sort the moves in either ascending or descending order.
  When someone wins, highlight the three squares that caused the win (and when no one wins, display a message about the result being a draw).
  Display the location for each move in the format (row, col) in the move history list.`