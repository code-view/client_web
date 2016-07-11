jest.disableAutomock();

import React from 'react';
import { shallow } from 'enzyme';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import { FlatButton } from 'material-ui';
import NotFound from '../NotFound';

describe('<NotFound />', () => {
  it('Contains go index button', () => {
    const index = () => undefined;
    const wrapper = shallow(<NotFound goIndex={index} />);

    expect(wrapper.containsMatchingElement(
      <FlatButton onClick={index}>
        <ArrowBack />
        to index
      </FlatButton>
    )).toEqual(true);
  });
});
