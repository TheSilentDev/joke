import {
  LOGOUT_SUCCESS,
  LOGIN_FAILED,
  LOGIN_SUCCESS
} from "../reducers/actionTypes";

export const loginUser = (email, password) => dispatch => {
  if (email === "joker@zaio.io" && password === "zaiojoke") {
    localStorage.setItem("isLoggedIn", "true");
    dispatch({
      type: LOGIN_SUCCESS,
      payload: true
    });
  } else {
    dispatch({
      type: LOGIN_FAILED,
      payload: false
    });
  }
};

export const signOut = () => dispatch => {
  localStorage.setItem("isLoggedIn", "false");
  dispatch({
    type: LOGOUT_SUCCESS,
    payload: false
  });
};
