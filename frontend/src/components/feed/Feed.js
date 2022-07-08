import React, { Fragment, useState } from "react";
import Posts from "./Posts";
import Filters from "./Filters";
import AddPostModal from "./AddPostModal";
import "../../css/feed.css";

const Feed = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="feed-div">
      {isModalVisible && <AddPostModal setIsModalVisible={setIsModalVisible} />}
      <div id="add-post-btn">
        <div className="add-btn" onClick={() => setIsModalVisible(true)}>
          +
        </div>
        <div className="add-desc">Upload new Post</div>
        <div className="arrow-right"></div>
      </div>
      <div id="feed">
        <Filters />
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
