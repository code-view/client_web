import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { configureStore } from '../store';
import Welcome from './Welcome';
import Editor from './Editor';
import NotFound from './NotFound';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={Welcome}/>
            <Route path="/session/:sessionId/" component={Editor}/>
            <Route path="/not-found/" component={NotFound}/>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
