import { 
  CREATE_NEW_SESSION, 
  FIND_OPEN_SESSIONS 
} from '../actions/types';

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
    case FIND_OPEN_SESSIONS:
      return {
        ...state,
        openSessions: action.payload
      };
    default:
      return state;
  }
}