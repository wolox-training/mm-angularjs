import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Square from './../Square/';
import style from './styles.scss';

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

class Board extends Component {
  handleClick(i) {
    if (calculateWinner(this.props.squares) || this.props.squares[i]) {
      return;
    }
    this.props.dispatch({
      type: 'CHECK',
      squares: this.props.squares,
      xIsNext: this.props.xIsNext,
      payload: i
    });
  }

  renderSquare = i => <Square value={this.props.squares[i]} onClick={() => this.handleClick(i)} />;
  render() {
    const winner = calculateWinner(this.props.squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <Fragment>
        <div className={style.status}>{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </Fragment>
    );
  }
}

Board.propTypes = {
  squares: PropTypes.arrayOf(),
  xIsNext: PropTypes.bool
};

const mapStateToProps = state => ({
  squares: state.plays.squares,
  xIsNext: state.plays.xIsNext
});

export default connect(mapStateToProps)(Board);
