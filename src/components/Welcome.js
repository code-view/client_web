import React, { Component } from 'react';
import { h1 } from 'react-dom';
import { TextField, RaisedButton } from 'material-ui';

class Welcome extends Component {
  _onKeyDown({keyCode}) {
    if (keyCode == 13) {
      this._goSession();
    }
  }

  _goSession() {
    this.props.goSession(this._input.input.value);
  }

  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Welcome to Code View!</h1>
        <div>
          <TextField ref={(input) => this._input = input}
                     onKeyDown={this._onKeyDown.bind(this)}/>
          {" "}
          <RaisedButton onClick={this._goSession.bind(this)}
                        primary={true}>
            Go!
          </RaisedButton>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: 'center'
  },
  title: {
    fontSize: '40px'
  }
};

export default Welcome;
