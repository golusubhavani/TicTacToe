import React from 'react';
import { Link } from 'react-router-dom';
import '../UserPage.css';
function Rules() {
  return (
    <div>
        <h2>Rules to Play</h2>
        <p> <span className='rules'>
            1) The game is played on a 3x3 grid.<br/>
            2) Player 1 is X and Player 2 is O. Players take turns marking a square.<br/>
            3) The first player to get 3 of their marks in a row (up, down, across, or diagonally) wins!<br/>
            4) If all 9 squares are filled and no player has 3 in a row, the game is a draw.<br/>
            5) Click on any empty square to make your move. 
            </span>
            <h3 className='go-back'><Link to= "/Game">Go Back</Link></h3>
        </p>
    </div>
  )
}

export default Rules