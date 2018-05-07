export const CHECK = 'CHECK';
export const WINNER = 'WINNER';

export const checkSquare = i => ({
  type: CHECK,
  payload: i
});

export const thereIsAWinner = squares => ({
  type: WINNER,
  squares
});
