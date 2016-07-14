import { SESSION_UPDATED, UNSUBSCRIBE, SUBSCRIBE } from '../constants/actionTypes';

const subscribe = (state, action) => {
  const subscriptions = {...state.subscriptions};
  subscriptions[action.sessionId] = action.socket;
  return {...state, subscriptions};
};

const unsubscribe = (state, action) => {
  const subscriptions = {...state.subscriptions};
  subscriptions[action.sessionId].close();
  delete subscriptions[action.sessionId];
  return {...state, subscriptions};
};

const reducer = (state = {subscriptions: {}}, action) => {
  switch (action.type) {
    case SESSION_UPDATED:
      return {...state, ...action.data};
    case SUBSCRIBE:
      return subscribe(state, action);
    case UNSUBSCRIBE:
      return unsubscribe(state, action);
    default:
      return state;
  }
};

export default reducer;
