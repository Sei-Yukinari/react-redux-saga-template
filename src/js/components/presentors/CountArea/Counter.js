import { ButtonToolbar, ButtonGroup, Button } from "react-bootstrap";


export default class Counter extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (

        <div>
          <h1>Counter example</h1>
          <h3>Clicked: { this.props.count.counter } times</h3>

          <ButtonToolbar>
            <ButtonGroup bsSize="large">
              <Button bsStyle="success"
                      className="increment"
                      onClick={ this.props.count.onIncrement }>
                +
              </Button>
              <Button bsStyle="primary"
                      className="decrement"
                      onClick={ this.props.count.onDecrement }>
                -
              </Button>
              <Button bsStyle="warning"
                      className="incrementIfOdd"
                      onClick={ this.props.count.onIncrementIfOdd }>
                IncrementIfOdd if odd
              </Button>
              <Button bsStyle="danger"
                      className="incrementAsync"
                      onClick={ this.props.count.onIncrementAsync }>
                IncrementAsync async
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
    );
  }
}