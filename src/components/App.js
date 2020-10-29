import React from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

const App = () => {
 
  const highScore = this.getHighScore();

  return (
    <div className="scoreboard">
      <Header />

      {/* Players list */}
      {this.state.players.map( (player, index) =>
        <Player 
          name={ player.name }
          score={ player.score }
          id={ player.id }
          index={ index }
          key={ player.id.toString() } 
          isHighScore={ highScore === player.score }         
        />
      )}
      <AddPlayerForm />
    </div>
  );
}

export default App;
