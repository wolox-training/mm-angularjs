import { combineReducers, createStore } from 'redux';

import { reducer } from './plays/reducer';

/* eslint-disable no-underscore-dangle */
export const store = createStore(
  combineReducers({
    plays: reducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
