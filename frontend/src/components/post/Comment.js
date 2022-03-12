import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment, postId }) => {
  return (
    <div className="single-comment">
      <div className="comment-avatar">
        <img src={comment.avatar} alt="User" />
      </div>
      <div className="comment-content">
        <div className="comment-user">
          <h4>{comment.username}</h4>
        </div>
        <div className="comment-text">{comment.text}</div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
};

export default Comment;
