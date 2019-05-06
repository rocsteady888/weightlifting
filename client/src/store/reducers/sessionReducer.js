import {
  CREATE_NEW_SESSION,
  SESSIONS_LOADING,
  GET_RECENT_SESSIONS,
  GET_INCOMPLETE_SESSIONS,
} from '../actions/types';

const initialState = {
  currentSession: {},
  recentSessions: {},
  incompleteSessions: {},
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SESSIONS_LOADING:
      return {
        ...state,
        loading: true
      };
    case CREATE_NEW_SESSION:
      return {
        ...state,
        currentSession: action.payload,
        loading: false
      };
    case GET_RECENT_SESSIONS:
      return {
        ...state,
        recentSessions: action.payload,
        loading: false
      };
    case GET_INCOMPLETE_SESSIONS:
      return {
        ...state,
        incompleteSessions: action.payload,
        loading: false
      };
    default:
      return state;
  }
}