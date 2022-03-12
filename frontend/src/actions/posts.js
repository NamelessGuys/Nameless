import {
  FETCH_POSTS,
  POSTS_ERROR,
  POST_ERROR,
  ADD_COMMENT,
  FETCH_POST,
} from './types';
import axios from 'axios';
import { setAlert } from './alert';

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
    const res = await axios.get('http://localhost:5000/api/posts/');
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
        dispatch(setAlert(error.msg, 'danger', '/feed'));
      });
    }
  }
};

export const fetchPost = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
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
        dispatch(setAlert(error.msg, 'danger', '/feed'));
      });
    }
  }
};
