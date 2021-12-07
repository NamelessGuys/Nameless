import {
  GET_SETTINGS,
  UPDATE_SETTINGS,
  SETTINGS_ERROR,
} from "../actions/types";

const initialState = {
  settings: {
    showNSFW:true,
    blurNSFW:true,
    emailNotif:true
  },
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SETTINGS:
    case UPDATE_SETTINGS:
      return { ...state, loading: false, settings: payload };
    case SETTINGS_ERROR:
      return { ...state, loading: false, settings: null };
    default:
      return state;
  }
}
