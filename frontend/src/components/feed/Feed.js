import React from 'react';
import Posts from './Posts';
import Filters from './Filters';
import '../../css/feed.css';

const Feed = () => {
  return (
    <div id="feed">
      <Posts />
      <Filters />
    </div>
  );
};

export default Feed;
