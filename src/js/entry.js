import 'babel-polyfill';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { initial } from './reducers';
import Main from './components/presentors/Main';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore( initial );

ReactDOM.render(
    <Provider store={ store }>
      <Main />
    </Provider>,
    document.getElementById( 'app' )
);