import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, incrementIfOdd, incrementAsync } from "../../actions";
import Counter from '../presentors/CountArea/Counter';

function mapStateToProps( state ) {
  return {
    counter:state.counter
  };
}
function mapDispatchToProps( dispatch ) {
  return {
    onIncrement:() => dispatch( increment() ),
    onDecrement:() => dispatch( decrement() ),
    onIncrementIfOdd:() => dispatch( incrementIfOdd() ),
    onIncrementAsync:() => dispatch( incrementAsync() ),
  }
}

@connect( mapStateToProps, mapDispatchToProps )
export default class CountContainer extends Component {
  render() {
    return (
        <Counter count={ this.props }/>
    );
  }
}