import React, { Component } from 'react';

const ScoreboardContext = React.createContext();


export class Provider extends Component {

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
        return(
            <ScoreboardContext.Provider value={{
                players: this.state.players,
                actions: {
                  changeScore: this.handleChangeScore,
                  removePlayer: this.handleRemovePlayer,
                  addPlayer: this.handleAddPlayer
                }
                }}>
                
                { this.props.children }
            </ScoreboardContext.Provider>
        )
    }
}

export const Consumer = ScoreboardContext.Consumer;