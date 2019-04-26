import axios from 'axios';

import {
  CREATE_NEW_SESSION, GET_ERRORS
} from './types';

export const createNewSession = () => dispatch => {
  axios
    .post('api/session/create')
    .then(res =>
      dispatch({
        type:CREATE_NEW_SESSION,
        payload:res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}