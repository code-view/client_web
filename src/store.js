import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router'
import ReduxThunk from 'redux-thunk'
import reducer from './reducers';

export const configureStore = () =>
  createStore(reducer,
    applyMiddleware(ReduxThunk, routerMiddleware(browserHistory)));
