import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';
import Game from './app/screens/Game';

class App extends Component {
  render() {
    return <Game />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
