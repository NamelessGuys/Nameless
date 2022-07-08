import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CHANGE_PASSWORD,
  LOGOUT,
} from "./types";
import setAuthToken from "../utils/setAuthToken";

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.getItem("token")) {
    setAuthToken(localStorage.getItem("token"));
  }

  try {
    const url =
      process.env.NODE_ENV === "production"
        ? `https://nameless-web.herokuapp.com/api/auth`
        : "http://localhost:5000/api/auth";
    const res = await axios.get(url);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register user
export const register =
  ({ username, email, password, college }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const url =
        process.env.NODE_ENV === "production"
          ? `https://nameless-web.herokuapp.com/api/users`
          : "http://localhost:5000/api/users";
      const res = await axios.post(
        url,
        { username, email, password, college },
        config
      );
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
      dispatch(setAlert("Successfully registered", "success", "/feed"));
    } catch (err) {
      // const errors = err.response.data.errors;
      const errors = err?.response?.data?.errors;

      if (errors) {
        errors.forEach((error) => {
          dispatch(setAlert(error.msg, "danger", "/register"));
        });
      }

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

// Login user
export const login =
  ({ username, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const url =
        process.env.NODE_ENV === "production"
          ? `https://nameless-web.herokuapp.com/api/auth`
          : "http://localhost:5000/api/auth";
      const res = await axios.post(url, { username, password }, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    } catch (err) {
      // const errors = err.response.data.errors;
      const errors = err?.response?.data?.errors;

      if (errors) {
        errors.forEach((error) =>
          dispatch(setAlert(error.msg, "danger", "/login"))
        );
      }

      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

// Logout / Clear Profile
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

//Change Password / Settings
export const changePassword = (password, userID) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const url =
      process.env.NODE_ENV === "production"
        ? `https://nameless-web.herokuapp.com/api/users/${userID}`
        : `http://localhost:5000/api/users/${userID}`;
    const res = await axios.put(url, { password }, config);
    dispatch({
      type: CHANGE_PASSWORD,
      payload: res.data,
    });
    dispatch(loadUser());
    dispatch(setAlert("Successfully changed password", "success", "/settings"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, "danger", "/settings"));
      });
    }
  }
};
