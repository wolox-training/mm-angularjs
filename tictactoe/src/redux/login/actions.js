import { browserHistory } from '../store';

import UserService from './../../services/UserServices';

export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function attemptLogin(email, pass) {
  return async dispatch => {
    dispatch({ type: LOGIN_ATTEMPT, email, pass });
    const response = await UserService.login(email, pass);
    if (
      response.ok &&
      response.data[0] &&
      response.data[0].email === email &&
      response.data[0].password === pass
    ) {
      dispatch({ type: LOGIN_SUCCESS, email, pass, response });
      browserHistory.push('/TicTacToe');
    } else {
      alert('Wrong email or password');
      dispatch({ type: LOGIN_FAILURE, email, pass, response });
    }
  };
}
