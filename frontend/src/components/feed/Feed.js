import React, { Fragment } from 'react';
import Posts from './Posts';
import Filters from './Filters';
import '../../css/feed.css';
import { BsPlusCircleFill } from 'react-icons/bs';

const Feed = () => {
  return (
    <Fragment>
      <button type='button' className='upload-btn btn'>
        <BsPlusCircleFill />
      </button>
      <div id='feed'>
        <Posts />
        <Filters />
      </div>
    </Fragment>
  );
};

export default Feed;
