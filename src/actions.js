import { push } from 'react-router-redux'
import { SESSION_UPDATED } from './constants/actionTypes';

export const goBack = () => push('/');

export const goSession = (sessionId) => push(`/session/${sessionId}/`);

export const sessionUpdated = (data) => {
  return {
    type: SESSION_UPDATED,
    data
  };
};

export const updateSession = (sessionId) => (dispatch) =>
  fetch(`/api/session/${sessionId}/`)
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      } else {
        return dispatch(push('/not-found/'));
      }
    }).then((json) => dispatch(sessionUpdated(json)));
