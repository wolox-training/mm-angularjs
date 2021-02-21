import userServices from './../../services/UserServices';

const initialState = {
  logged: false
};

export const getUserSession = (state = initialState, action) => {
  const response = await userServices.getSessionToken(action.email);
  switch (action.type) {
    case 'GET_USER_SESSION':
      return {};
    default:
      return state;
  }
};
