import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    removePlayer: PropTypes.func,
    changeScore: PropTypes.func,
    id: PropTypes.number,
    index: PropTypes.number,
    score: PropTypes.number.isRequired,
    isHighScore: PropTypes.bool
  }

  render() {
    const {
      name,
      removePlayer,
      id,
      index,
      score,
      changeScore,
      isHighScore
    } = this.props;

    console.log(isHighScore);

      return (
        <div className="player">
          <span className="player-name">
            <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>

            <Icon isHighScore={isHighScore} />

            { name }

          </span>
    
          <Counter 
              index={ index}
              score={ score }
              changeScore={ changeScore }
              />
        </div>
      );
    }
  }

  export default Player;