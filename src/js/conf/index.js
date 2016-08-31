import _default from './default';
import development from './development';

const env = typeof process.env.NODE_ENV == 'undefined' ? 'development' : process.env.NODE_ENV;
const envConf = env == 'development' ? development : {};

export default { ..._default, ...envConf };