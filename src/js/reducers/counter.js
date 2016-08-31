import * as actions from 'actions';

export const initial = 0;

const handlers = {
  [actions.INCREMENT]:( state, action ) => {
    console.log( action.payload );
    return state + 1;
  },
  [actions.INCREMENT_IF_ODD]:( state, action ) => {
    return (state % 2 !== 0) ? state + 1 : state;
  },
  [actions.DECREMENT]:( state, action ) => {
    return state - 1;
  }
};

export default ( state = initial, action ) => {
  const handler = handlers[action.type];
  return handler ? handler( state, action ) : state;
}