import api from './../../services/UserServices';

export const GET_USER_SESSION = 'GET_USER_SESSION';

export const getUserSession = () => ({
  type: GET_USER_SESSION
});
