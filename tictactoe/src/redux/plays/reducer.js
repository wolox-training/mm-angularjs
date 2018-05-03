import actions from './actions';

const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK':
      return {
        ...state,
        squares: [
          ...state.squares.slice(0, action.payload),
          state.xIsNext ? 'X' : 'O',
          ...state.squares.slice(action.payload + 1)
        ],
        xIsNext: !state.xIsNext
      };
    default:
      return state;
  }
};
