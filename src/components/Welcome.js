import React, { Component } from 'react';
import { strong, p, iframe } from 'react-dom';
import { AppBar, FlatButton, Card, CardActions, CardHeader, CardText } from 'material-ui';

class Welcome extends Component {
  render() {
    return (
      <div>
        <AppBar title="code-view.io [not-even-alpha]"
                showMenuIconButton={false}
                iconElementRight={
                  <FlatButton label="github"
                              href="https://github.com/code-view/"
                              target="_blank"/>
                }/>

        <Card style={styles.card}>
          <CardHeader title="What is code-view.io?"/>
          <CardText>
            <p>It's a service for streaming code from IDE to browser.
              Useful in review process, workshops and other situations.</p>

            <iframe style={styles.video} width="800" height="450"
                    src="https://www.youtube.com/embed/nDPBLFR6vyQ"></iframe>
          </CardText>
        </Card>

        <Card style={styles.card}>
          <CardHeader title="How to use it?"/>
          <CardText>
            <p>You just need to install plugin for your IDE and start streaming.</p>

            <p>Currently only IntelliJ IDEA 2016.2.0 supported.</p>

            <img style={styles.video} src="/intellij.png" alt=""/>
          </CardText>
          <CardActions>
            <FlatButton label="Download IntelliJ IDEA plugin"
                        href="https://github.com/code-view/client_idea/releases"
                        target="_blank"/>
            <FlatButton label="API documentation"
                        href="https://github.com/code-view/server#api"
                        target="_blank"/>
          </CardActions>
        </Card>
      </div>
    );
  }
}

const styles = {
  card: {
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '30px',
  },
  video: {
    border: 0,
    marginLeft: '-16px',
    marginBottom: '-19px'
  }
};

export default Welcome;
