import {
  POSTS_ERROR,
  FETCH_POSTS,
  FETCH_POST,
  ADD_COMMENT,
  POST_ERROR,
} from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_POSTS:
      return { ...state, posts: payload, loading: false };
    // case ADD_POST:
    //   return { ...state, loading: false, posts: [payload, ...state.posts] };
    case POSTS_ERROR:
      return { ...state, loading: false, posts: [], post: null };

    case FETCH_POST:
      return { ...state, loading: false, post: payload };
    case ADD_COMMENT:
      return { ...state, loading: false, post: [payload, ...state.post] };
    case POST_ERROR:
      return { ...state, loading: false, post: null };
    default:
      return state;
  }
}
