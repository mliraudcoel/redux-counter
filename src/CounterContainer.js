import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  count: state
});

const CounterContainer = ({ count, dispatch }) => (
  <div>
    <p>{count}</p>
    <button
      onClick={() => dispatch({ type: 'ADD1' })}
    >
      Add 1
    </button>
    <button
      onClick={() => dispatch({ type: 'REMOVE1' })}
    >
      Remove 1
    </button>
    <button
      onClick={() => dispatch({ type: 'ADD10' })}
    >
      Add 10
    </button>
    <button
      onClick={() => dispatch({ type: 'REMOVE10' })}
    >
      Remove 10
    </button>
    <button
      onClick={() => dispatch({ type: 'RESET' })}
    >
      Reset
    </button>
  </div>
);

export default connect(
  mapStateToProps
)(CounterContainer);