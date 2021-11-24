import { UPDATE_SETTINGS, GET_SETTINGS, SETTINGS_ERROR } from "./types";
import axios from "axios";
import { setAlert } from "./alert";

export const getSettings = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/settings/me");
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
