import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType, redirectLink) => (dispatch) => {
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, redirectLink },
  });
};

export const removeAlert = () => (dispatch) => {
  dispatch({
    type: REMOVE_ALERT,
  });
};
