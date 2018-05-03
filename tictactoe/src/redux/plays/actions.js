export const CHECK = 'CHECK';

export const checkSquare = (cell, bool, i) => ({
  type: 'CHECK',
  square: cell,
  xIsNext: bool,
  payload: i
});
