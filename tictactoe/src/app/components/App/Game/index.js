import React from 'react';

import style from './styles.scss';
import Board from './../Board/';

class Game extends React.Component {
  render() {
    return (
      <div className={style.game}>
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
