import { SESSION_UPDATED } from '../constants/actionTypes';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SESSION_UPDATED:
      return action.data;
    default:
      return state;
  }
};

export default reducer;
