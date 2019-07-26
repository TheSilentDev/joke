import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actionTypes";

const initialState = {
  isLoggedIn: false,
  loginUnsuccessful: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: action.payload
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loginUnsuccessful: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: action.payload
      };
    default:
      return state;
  }
}
