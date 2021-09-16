import React from 'react';

const Comment = () => {
  return (
    <div className="single-comment">
      <div className="comment-avatar">
        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User" />
      </div>
      <div className="comment-content">
        <div className="comment-user">
          <h4>John Doe</h4>
        </div>
        <div className="comment-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          doloremque ut natus, maiores velit ea magni placeat,
        </div>
      </div>
    </div>
  );
};

export default Comment;
