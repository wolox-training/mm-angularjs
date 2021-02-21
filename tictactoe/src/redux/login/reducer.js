const initialState = {
  email: '',
  password: '',
  LoggingIn: false,
  LoggedIn: false,
  error: null
};

export function login(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_ATTEMPT':
      return {
        ...state,
        LoggingIn: true,
        LoggedIn: false,
        email: action.email,
        password: action.password // Note you shouldn't store user's password in real apps
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        error: action.error,
        LoggingIn: false,
        LoggedIn: false
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        error: null,
        LoggingIn: false,
        LoggedIn: true
      };
    default:
      return state;
  }
}
