import React, { Component } from 'react';

import Board from './components/Board';
import style from './styles.scss';

class Game extends Component {
  render() {
    return (
      <div className={style.game}>
        <div className="game-info">
          <Board />
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
