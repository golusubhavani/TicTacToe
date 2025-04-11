import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Square ({value, onSquareClick}) {
  return(
    <button className='square' onClick={onSquareClick}>
      {value} 
    </button>
  );
}
export default function Board()
{
  const [xIsNext, setXISNext]=useState(true);
  const [squares, setSquares]=useState(Array(9).fill(null));

  function handleClick(i){
    if ( calculateWinner(squares) ||squares[i]){
      return;
    }
    const nextSquares=squares.slice();
    if (xIsNext){
      nextSquares[i]='X';
    }
    else{
      nextSquares[i]='O';
    }
    setSquares(nextSquares);
    setXISNext(!xIsNext);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner){
    status ='Winner: '+ winner;
  }
  else{
    status = 'Next Player: ' + (xIsNext ? 'X' : 'O');
  }
  return( 
  <>
  <h1>Let's Play a Game&nbsp; <span className="highlight"> Tic Tac Toe</span></h1>
  <div className="status">{status}</div> 
  <div className='game-box'>
  <div className='board-row'>
    <Square value={squares[0]} onSquareClick={()=>handleClick(0)} />
    <Square value={squares[1]} onSquareClick={()=>handleClick(1)} />
    <Square value={squares[2]} onSquareClick={()=>handleClick(2)} />
  </div>
  <div className='board-row'>
    <Square value={squares[3]} onSquareClick={()=>handleClick(3)} />
    <Square value={squares[4]} onSquareClick={()=>handleClick(4)} />
    <Square value={squares[5]} onSquareClick={()=>handleClick(5)} />
  </div>
  <div className='board-row'>
    <Square value={squares[6]} onSquareClick={()=>handleClick(6)} />
    <Square value={squares[7]} onSquareClick={()=>handleClick(7)} />
    <Square value={squares[8]} onSquareClick={()=>handleClick(8)} />
  </div>
  </div>
  <h4>Click hear to Know about the Rules&nbsp; <Link to="/Rules">Clickhere</Link></h4>
  <a href="" onClick={() => window.location.reload()}>Restart Game</a>
  </>
  );
}

function calculateWinner(squares){
  const lines=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for (let i=0; i<lines.length; i++){
    const [a,b,c]=lines[i];
    if (squares[a] && squares[a] === squares[b] &&squares[a] ===squares[c]){
      return squares[a];
    }
  }
  return null;
}
