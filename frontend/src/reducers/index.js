import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import settings from "./settings";
import posts from "./posts";

export default combineReducers({
  alert,
  auth,
  settings,
  posts,
});
