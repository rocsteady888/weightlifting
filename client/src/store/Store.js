import React, { createContext } from 'react'
import isEmpty from '../validation/isEmpty';

import { SET_CURRENT_USER, GET_ERRORS, CLEAR_ERRORS } from './actions/types';

export const Store = createContext();

const initialState = {
  isAuthenticated: false,
  user: {}
};

function reducer(state = initialState, action) {
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

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}