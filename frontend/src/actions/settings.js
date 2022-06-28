import { UPDATE_SETTINGS, GET_SETTINGS, SETTINGS_ERROR } from "./types";
import axios from "axios";
import { setAlert } from "./alert";

export const getSettings = () => async (dispatch) => {
  try {
    const url =
      process.env.NODE_ENV === "production"
        ? `https://nameless-web.herokuapp.com/api/settings/me`
        : `http://localhost:5000/api/settings/me`;
    const res = await axios.get(url);
    dispatch({
      type: GET_SETTINGS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SETTINGS_ERROR,
    });
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, "danger", "/settings"));
      });
    }
  }
};

export const updateSettings = (settings, userID) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const url =
      process.env.NODE_ENV === "production"
        ? `https://nameless-web.herokuapp.com/api/settings/${userID}`
        : `http://localhost:5000/api/settings/${userID}`;
    const res = await axios.put(url, { settings }, config);
    dispatch({
      type: UPDATE_SETTINGS,
      payload: settings,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, "danger", "/settings"));
      });
    }
  }
};
