import React, { useState } from 'react';
import UserVsComputer from './UserVsComputer';
import UserVsUser from './UserVsUser';
import './App.css';

function App() {
  const [gameMode, setGameMode] = useState(null);

  const handleGameModeSelection = (mode) => {
    setGameMode(mode);
  };

  const resetGame = () => {
    setGameMode(null);
  };

  return (
    <div className="App">
      <h1 className='heading'>Rock Paper Scissors</h1>
      {gameMode === null && (
        <div className="button-div">
          <button className="button" onClick={() => handleGameModeSelection('UserVsComputer')}>User vs Computer</button>
          <button className="button" onClick={() => handleGameModeSelection('UserVsUser')}>User vs User</button>
        </div>
      )}
      {gameMode === 'UserVsComputer' && <UserVsComputer onReset={resetGame} />}
      {gameMode === 'UserVsUser' && <UserVsUser onReset={resetGame} />}
    </div>
  );
}

export default App;