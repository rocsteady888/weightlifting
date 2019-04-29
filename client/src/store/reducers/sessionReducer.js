import { CREATE_NEW_SESSION } from '../actions/types';

const initialState = {
  currentSession: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_SESSION:
      return {
        ...state,
        currentSession: action.payload
      };
    default:
      return state;
  }
}