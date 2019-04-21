import isEmpty from '../validation/isEmpty';

import { SET_CURRENT_USER, GET_ERRORS, CLEAR_ERRORS } from './actions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case GET_ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}
