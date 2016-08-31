import Counter from '../containers/CountContainer'

export default class Contents extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
        <div>
          <Counter/>
        </div>
    );
  }
}