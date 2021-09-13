import React, { Fragment, useState } from 'react';
import Posts from './Posts';
import Filters from './Filters';
import AddPostModal from './AddPostModal';
import '../../css/feed.css';

const Feed = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <Fragment>
      {isModalVisible && <AddPostModal />}
      <div id="add-post-btn">
        <div className="add-btn" onClick={() => setIsModalVisible(true)}>
          +
        </div>
        <div className="add-desc">Upload new Post</div>
        <div className="arrow-right"></div>
      </div>
      <div id="feed">
        <Posts />
        <Filters />
      </div>
    </Fragment>
  );
};

export default Feed;
