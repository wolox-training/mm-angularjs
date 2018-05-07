const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true
};

const initialStateWinner = {
  winner: null
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export const checkedSquare = (state = initialState, action) => {
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

export const thereIsAWinner = (state = initialStateWinner, action) => {
  switch (action.type) {
    case 'WINNER':
      return {
        winner: calculateWinner(action.squares)
      };
    default:
      return state;
  }
};
