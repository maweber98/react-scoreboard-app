import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    removePlayer: PropTypes.func,
    id: PropTypes.number,
    index: PropTypes.number,
    score: PropTypes.number.isRequired,
    isHighScore: PropTypes.bool
  }

  render() {
    const {
      name,
      id,
      index,
      score,
      isHighScore
    } = this.props;

    console.log(isHighScore);

      return (
        <div className="player">
          <span className="player-name">

          <Consumer>
            { context => {
              return(
                <button className="remove-player" onClick={() => context.actions.removePlayer(id)}>✖</button>
              )
            }}
          </Consumer>

            <Icon isHighScore={isHighScore} />

            { name }

          </span>
    
          <Counter 
              index={ index}
              score={ score }
              />
        </div>
      );
    }
  }

  export default Player;