import { POSTS_ERROR, FETCH_POSTS, ADD_POST } from "../actions/types";

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
    case ADD_POST:
      return {...state, loading:false, posts: [payload, ...state.posts]};
    case POSTS_ERROR:
      return { ...state, loading: false, posts: [], post: null };
    default:
      return state;
  }
}
