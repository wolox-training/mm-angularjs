import React, { Component } from 'react';

import style from './styles.scss';
import Game from './Game';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Game />
      </React.Fragment>
    );
  }
}

export default App;
