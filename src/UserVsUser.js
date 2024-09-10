import React, { useState, useEffect } from 'react';

function UserVsUser({ onReset }) {
  const [userChoice, setUserChoice] = useState('rock');
  const [secondUserChoice, setSecondUserChoice] = useState('rock');
  const [userPoints, setUserPoints] = useState(0);
  const [secondUserPoints, setSecondUserPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState('Let\'s see who wins');
  const [gameOver, setGameOver] = useState(false);

  const choices = ['rock', 'paper', 'scissors'];

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
  };

  const handleSecondUserChoice = (choice) => {
    setSecondUserChoice(choice);
  };

  useEffect(() => {
    const comboMoves = userChoice + secondUserChoice;
    if (userPoints <= 4 && secondUserPoints <= 4) {
      if (comboMoves === 'rockscissors' || comboMoves === 'paperrock' || comboMoves === 'scissorspaper') {
        const updatedUserPoints = userPoints + 1;
        setUserPoints(updatedUserPoints);
        setTurnResult('User 1 got the point');
        if (updatedUserPoints === 5) {
          setGameOver(true);
          setResult('User 1 wins!');
        }
      }
      if (comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper') {
        const updatedSecondUserPoints = secondUserPoints + 1;
        setSecondUserPoints(updatedSecondUserPoints);
        setTurnResult('User 2 got the point');
        if (updatedSecondUserPoints === 5) {
          setGameOver(true);
          setResult('User 2 wins!');
        }
      }
      if (comboMoves === 'scissorsscissors' || comboMoves === 'rockrock' || comboMoves === 'paperpaper') {
        setTurnResult('It\'s a draw');
      }
    }
  }, [userChoice, secondUserChoice]);

  return (
    <div>
      <div className='score'>
        <h1>User 1 Points: {userPoints}</h1>
        <h1>User 2 Points: {secondUserPoints}</h1>
      </div>
      <div className='choice'>
        <div className='choice-user'>
          <h2>User 1</h2>
          <img className='user-hand' src={`../images/${userChoice}.png`} alt="User 1 choice" />
        </div>
        <div className='choice-user'>
          <h2>User 2</h2>
          <img className='user-hand' src={`../images/${secondUserChoice}.png`} alt="User 2 choice" />
        </div>
      </div>

      <div className='button-div'>
        <h2>User 1, make your choice:</h2>
        {choices.map((choice, index) =>
          <button className='button' key={index} onClick={() => handleUserChoice(choice)} disabled={gameOver}>
            {choice}
          </button>
        )}
      </div>

      <div className='button-div'>
        <h2>User 2, make your choice:</h2>
        {choices.map((choice, index) =>
          <button className='button' key={index} onClick={() => handleSecondUserChoice(choice)} disabled={gameOver}>
            {choice}
          </button>
        )}
      </div>

      <div className='result'>
        <h1>Turn Result: {turnResult}</h1>
        <h1>Final Result: {result}</h1>
      </div>

      <div className='button-div'>
        {gameOver && 
          <button className='button' onClick={onReset}>Restart Game?</button>
        }
      </div>
    </div>
  );
}

export default UserVsUser;
