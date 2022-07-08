import {
  FETCH_POSTS,
  POSTS_ERROR,
  POST_ERROR,
  ADD_COMMENT,
  FETCH_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";

// export const addPost = (postForm) => async (dispatch) => {
//   try {
//     axios.post("http://localhost:5000/api/posts", postForm).then((res) => {
//       dispatch({
//         type: ADD_POST,
//         payload: res.data,
//       });
//     });
//   } catch (err) {
//     console.log("Error");
//   }
// };

export const fetchPosts = () => async (dispatch) => {
  try {
    const url =
      process.env.NODE_ENV === "production"
        ? `https://nameless-web.herokuapp.com/api/posts/`
        : `http://localhost:5000/api/posts/`;
    const res = await axios.get(url);
    dispatch({
      type: FETCH_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
    });
    const errors = err?.response?.data?.errors;
    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, "danger", "/feed"));
      });
    }
  }
};

export const fetchPost = (id) => async (dispatch) => {
  try {
    const url =
      process.env.NODE_ENV === "production"
        ? `https://nameless-web.herokuapp.com/api/posts/${id}`
        : `http://localhost:5000/api/posts/${id}`;
    const res = await axios.get(url);
    dispatch({
      type: FETCH_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
    });
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, "danger", "/feed"));
      });
    }
  }
};
export const addComment = (comment, id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const url =
      process.env.NODE_ENV === "production"
        ? `https://nameless-web.herokuapp.com/api/posts/comment/${id}`
        : `http://localhost:5000/api/posts/comment/${id}`;
    const res = await axios.post(url, { comment }, config);
    console.log(res);
    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });
  } catch (err) {
    // const errors = err.response.data.errors;
    console.log(err);
    // if (errors) {
    // errors.forEach((error) => {
    // dispatch(setAlert(error.msg, "danger", "/feed"));
    // });
    // }
  }
};

export const upvotePost = (id) => async (dispatch) => {
  try {
    const url =
      process.env.NODE_ENV === "production"
        ? `https://nameless-web.herokuapp.com/api/posts/upvotes/${id}`
        : `http://localhost:5000/api/posts/upvotes/${id}`;
    const res = await axios.put(url);

    dispatch({
      type: UPVOTE_POST,
      payload: { id, post: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
    });
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, "danger", "/feed"));
      });
    }
  }
};

export const downvotePost = (id) => async (dispatch) => {
  try {
    const url =
      process.env.NODE_ENV === "production"
        ? `https://nameless-web.herokuapp.com/api/posts/downvotes/${id}`
        : `http://localhost:5000/api/posts/downvotes/${id}`;
    const res = await axios.put(url);

    dispatch({
      type: DOWNVOTE_POST,
      payload: { id, post: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
    });
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, "danger", "/feed"));
      });
    }
  }
};
