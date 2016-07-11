import isUndefined from 'lodash/isUndefined';
import isNull from 'lodash/isNull';
import React, { Component } from 'react';
import { div } from 'react-dom';
import { AppBar, FlatButton, IconButton } from 'material-ui';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import { SCROLL_OFFSET } from '../constants/sizes';
const {getModeForPath} = ace.require('ace/ext/modelist');
const {Range} = ace.require('ace/range');

class Editor extends Component {
  _removeOldSelection() {
    if (!isUndefined(this._selectionMarker)) {
      this._editor.getSession().removeMarker(this._selectionMarker);
    }
  }

  _drawSelection() {
    const selectionRange = new Range(
      this.props.selectionStartLine, this.props.selectionStartColumn,
      this.props.selectionEndLine, this.props.selectionEndColumn);
    this._selectionMarker = this._editor.getSession().addMarker(
      selectionRange, 'owner-selection');
  }

  _drawCursor() {
    const selectionRange = new Range(
      this.props.selectionStartLine, this.props.selectionStartColumn,
      this.props.selectionStartLine, this.props.selectionStartColumn + 1);
    this._selectionMarker = this._editor.getSession().addMarker(
      selectionRange, 'owner-cursor');
  }

  _updateSelection() {
    this._editor.clearSelection();
    this._removeOldSelection();

    if (this.props.selectionStartLine === this.props.selectionEndLine &&
        this.props.selectionStartColumn === this.props.selectionEndColumn) {
      this._drawCursor()
    } else {
      this._drawSelection();
    }
  }

  _scrollToCursor() {
    let line = this.props.selectionStartLine - SCROLL_OFFSET;
    if (line < 0) {
      line = 0;
    }

    this._editor.scrollToLine(line);
  }

  componentDidMount() {
    this.props.updateSession(this.props.id);
    this._editor = ace.edit(this._holder);
    this._editor.setTheme("ace/theme/github");

    this._timer = setInterval(
      () => this.props.updateSession(this.props.id),
      100
    );
  }

  componentDidUpdate() {
    if (isNull(this.props.fileName) || isUndefined(this.props.fileName)) {
      return;
    }

    this._editor.setValue(this.props.text);
    const {mode} = getModeForPath(this.props.fileName);
    this._editor.getSession().setMode(mode);
    // We need to reset readonly after each update
    this._editor.setReadOnly(true);

    this._updateSelection();
    this._scrollToCursor();
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }

  render() {
    return (
      <div style={styles.container}>
        <AppBar title={this.props.fileName}
                iconElementRight={<FlatButton onClick={this._scrollToCursor.bind(this)}
                                              label="Scroll to cursor" />}
                iconElementLeft={<IconButton onClick={this.props.goBack}>
                                  <ArrowBack />
                                </IconButton>}/>
        <div ref={(ref) => this._holder = ref}
             style={styles.holder}></div>
      </div>
    )
  }
}

const styles = {
  container: {
    width: '100%',
    height: 'calc(100% - 64px)',
    margin: '0'
  },
  holder: {
    width: '100%',
    height: '100%',
    fontSize: '18px',
    margin: 0
  }
};

export default Editor;
