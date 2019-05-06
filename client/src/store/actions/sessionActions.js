import axios from 'axios';

import {
  CREATE_NEW_SESSION,
  SESSIONS_LOADING,
  GET_RECENT_SESSIONS,
  GET_INCOMPLETE_SESSIONS,
  GET_ERRORS
} from './types';

export const createNewSession = () => dispatch => {
  axios
    .post('api/session/create')
    .then(res =>
      dispatch({
        type: CREATE_NEW_SESSION,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

// Get recent sessions of current user's
export const getRecentSessions = () => dispatch => {
  dispatch(setSessionsLoading());
  axios.get('api/session/recent')
    .then(res =>
      dispatch({
        type: GET_RECENT_SESSIONS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_RECENT_SESSIONS,
        payload: null
      })
    );
}

// Get any incomplete sessions
export const getIncompleteSessions = () => dispatch => {
  dispatch(setSessionsLoading());
  axios.get('api/session/incomplete')
    .then(res =>
      dispatch({
        type: GET_INCOMPLETE_SESSIONS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_INCOMPLETE_SESSIONS,
        payload: null
      })
    );
}

// Set loading state
export const setSessionsLoading = () => {
  return {
    type: SESSIONS_LOADING
  };
};