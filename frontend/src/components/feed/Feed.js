import React from "react";
import Post from "./Post";
import "../../css/feed.css";
import Filters from "./Filters";

const Feed = () => {
  return (
    <div id="feed">
      <Post />
      <Filters />
    </div>
  );
};

export default Feed;
