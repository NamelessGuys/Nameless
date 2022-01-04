import { POSTS_ERROR, FETCH_POSTS } from "../actions/types";

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
    case POSTS_ERROR:
      return { ...state, loading: false, posts: [], post: null };
    default:
      return state;
  }
}
