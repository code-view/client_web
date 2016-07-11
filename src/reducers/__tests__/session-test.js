jest.disableAutomock();

import { sessionUpdated } from '../../actions';
import reducer from '../session';

describe('Reducer', () => {
  it('Update session', () => {
    const state = reducer({}, sessionUpdated({
      id: 'test',
      fileName: 'main.py'
    }));

    expect(state).toEqual({
      id: 'test',
      fileName: 'main.py'
    });
  });

  it('Do nothing', () => {
    const state = reducer({}, {});

    expect(state).toEqual({});
  });
});
