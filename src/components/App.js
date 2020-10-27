import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  // Player id counter
  prevPlayerId = 4;


  handleChangeScore = (index, changeBy) => {
      this.setState( prevState => ({
        score: prevState.players[index].score += changeBy
      }));
    }

  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    } 
    return null;
  }


  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleAddPlayer = (name) => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name: name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      }
    });
  }
  
  render() {
    const highScore = this.getHighScore();
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={ player.name }
            score={ player.score }
            id={ player.id }
            index={ index }
            key={ player.id.toString() } 
            removePlayer={ this.handleRemovePlayer }
            changeScore={ this.handleChangeScore }
            isHighScore={ highScore === player.score }         
          />
        )}

        <AddPlayerForm addPlayer={ this.handleAddPlayer }/>
      </div>
    );
  }
}

export default App;
