import Contents from './Contents';

export default class Main extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
        <div>
          <Contents />
        </div>
    );
  }
}