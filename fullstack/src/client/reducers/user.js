import { LOGIN, LOGOUT } from '../actions';

const initState = {
  details: {},
  errMsg: '',
};

export default function user(state = initState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        details: action.data,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        details: {},
        errMsg: '',
      };
    }
    default: {
      return state;
    }
  }
}
