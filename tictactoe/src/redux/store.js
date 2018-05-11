import { combineReducers, createStore, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import thunk from 'redux-thunk';
import createBrowserHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import { checkedSquare } from './plays/reducer';
import { thereIsAWinner } from './winner/reducer';
import { login } from './login/reducer';

export const browserHistory = createBrowserHistory();

const middlewares = [thunk];

/* eslint-disable no-underscore-dangle */
const store = createStore(
  combineReducers({
    checkedSquare,
    thereIsAWinner,
    form,
    login
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares)
);
/* eslint-enable */

export default store;
