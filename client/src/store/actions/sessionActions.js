import axios from 'axios';

import {
  CREATE_NEW_SESSION, 
  FIND_OPEN_SESSIONS,
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

export const findOpenSessions = () => dispatch => {
  axios
    .get('api/session/findOpen')
    .then(res =>
      dispatch({
        type: FIND_OPEN_SESSIONS,
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