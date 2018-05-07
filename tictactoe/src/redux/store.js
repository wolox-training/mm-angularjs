import { combineReducers, createStore } from 'redux';

import { checkedSquare, thereIsAWinner } from './plays/reducer';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  combineReducers({
    checkedSquare,
    thereIsAWinner
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;
