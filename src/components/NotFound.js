import React from 'react';
import { div, h1, a } from 'react-dom';
import { FlatButton } from 'material-ui';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

const NotFound = ({goIndex}) => {
  return (
    <div>
      <h1>Not Found</h1>
      <FlatButton onClick={goIndex}>
        <ArrowBack />
        to index
      </FlatButton>
    </div>
  );
};

const styles = {};

export default NotFound;
