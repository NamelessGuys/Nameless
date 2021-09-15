import React from 'react';
import Comment from './Comment';

const Comments = () => {
  return (
    <div className='comment-box'>
      <div className='comments'>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
      <div className='add-comment'>
        <label>
          <textarea placeholder='Add comment(max limit:500)'></textarea>
        </label>
      </div>
    </div>
  );
};

export default Comments;
