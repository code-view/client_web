jest.disableAutomock();

import { sessionUpdated } from '../../actions';
import reducer from '../';

describe('Reducers', () => {
  it('Combined', () => {
    const state = reducer({}, sessionUpdated({id: 'test'}));

    expect(state.session).toEqual({id: 'test'});
  });
});
