import { push } from 'react-router-redux'
import { SESSION_UPDATED, SUBSCRIBE, UNSUBSCRIBE } from './constants/actionTypes';

export const goBack = () => push('/');

export const goSession = (sessionId) => push(`/session/${sessionId}/`);

const getWSHost = () => {
  if (__DEV__) {
    return 'ws://localhost:8080';
  } else {
    const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
    return `${protocol}://${window.location.host}`;
  }
};

const getSession = (sessionId) =>
  fetch(`/api/session/${sessionId}/`)
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw Error(`Session ${sessionId} not found!`)
      }
    });

export const subscribe = (sessionId) => (dispatch) => getSession(sessionId).then(
  (json) => {
    dispatch(sessionUpdated(json));

    const url = `${getWSHost()}/channel/session/${sessionId}/`;
    const conn = new WebSocket(url);

    conn.onopen = () => dispatch({
      type: SUBSCRIBE,
      sessionId,
      socket: conn,
    });

    conn.onmessage = ({data}) => {
      const session = JSON.parse(data);
      dispatch(sessionUpdated(session));
    };
  },
  () => dispatch(push('/not-found/')));

export const unsubscribe = (sessionId) => {
  return {
    type: UNSUBSCRIBE,
    sessionId
  }
};

export const sessionUpdated = (data) => {
  return {
    type: SESSION_UPDATED,
    data
  };
};
