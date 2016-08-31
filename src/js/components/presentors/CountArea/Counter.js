export default class Counter extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
        <div>
          <h1>Counter example</h1>
          <p>
            Clicked: { this.props.count.counter } times
            {" "}
            <button className="increment" onClick={ this.props.count.onIncrement }>+</button>
            {" "}
            <button className="decrement" onClick={ this.props.count.onDecrement }>-</button>
            {" "}
            <button className="incrementIfOdd" onClick={ this.props.count.onIncrementIfOdd }>IncrementIfOdd if odd
            </button>
            {" "}
            <button className="incrementAsync" onClick={ this.props.count.onIncrementAsync }>IncrementAsync async
            </button>
          </p>
        </div>
    );
  }
}