import { FETCH_POSTS, POSTS_ERROR } from "./types";
import axios from "axios";
import { setAlert } from "./alert";

export const fetchPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/posts/");
    dispatch({
      type: FETCH_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
    });
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, "danger", "/feed"));
      });
    }
  }
};
