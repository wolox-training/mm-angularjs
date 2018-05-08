import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import Login from './app/screens/Login';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Link to="/Login" />
          <Route path="/Login" component={Login} />
        </div>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
