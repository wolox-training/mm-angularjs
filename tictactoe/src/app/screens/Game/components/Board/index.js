import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Square from './../Square/';
import style from './styles.scss';
import { checkSquare, thereIsAWinner } from './../../../../../redux/plays/actions';

class Board extends Component {
  handleClick = i => {
    if (this.props.winner !== null) {
      return;
    }
    this.props.dispatch(checkSquare(i));
  };

  renderSquare = i => <Square value={this.props.squares[i]} onClick={() => this.handleClick(i)} />;
  render() {
    this.props.dispatch(thereIsAWinner(this.props.squares));

    let status;
    if (this.props.winner !== null) {
      status = `Winner: ${this.props.winner}`;
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
  squares: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number })),
  xIsNext: PropTypes.bool,
  winner: PropTypes.string
};

const mapStateToProps = state => ({
  squares: state.checkedSquare.squares,
  xIsNext: state.checkedSquare.xIsNext,
  winner: state.thereIsAWinner.winner
});

export default connect(mapStateToProps)(Board);
