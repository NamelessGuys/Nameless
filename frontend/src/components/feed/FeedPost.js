import React, { useState } from 'react';
import { GiThumbDown, GiThumbUp } from 'react-icons/gi';
import { FaComment, FaFlag, FaCopy } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FeedPost = ({ post }) => {
  const [isOptionVisible, setIsOptionVisible] = useState(false);

  return (
    <div className="feed-post bg-graydark">
      <div className="post-head">
        <h3>{post.title}</h3>
        <div className="post-info">
          <div onClick={() => setIsOptionVisible(!isOptionVisible)}>
            <input type="checkbox" className="toggler" />
            <div className="hamburger">
              <div></div>
            </div>
          </div>
          <div className={`post-actions ${isOptionVisible ? 'show' : ''}`}>
            <div className="post-action">
              <i>
                <FaCopy />
              </i>{' '}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    `http://localhost:3000/posts/${post._id}`
                  );
                }}
              >
                <h4>Copy Link</h4>
              </button>
            </div>
            <div className="post-action">
              <i>
                <FaFlag />
              </i>{' '}
              <h4>Report</h4>
            </div>
          </div>
        </div>
      </div>
      <Link to={`/posts/${post._id}`}>
        <div className="post-body">
          <div className="post-text">{post.text}</div>
          <div className="post-tags">
            <div className="tags">
              {post.tags.map((tag) => (
                <div className="tag">#{tag} </div>
              ))}
            </div>
            <div className="college-name">{post.college}</div>
          </div>
          <div className="post-img"></div>
        </div>
      </Link>
      <div className="post-footer">
        <div className="post-vote">
          <i>
            <GiThumbUp />
          </i>
          <p className="vote-count">{post.upvotes.length - post.downvotes.length}</p>
          <i>
            <GiThumbDown />
          </i>
        </div>
        <div className="post-comment">
          <p className="comment-count">{post.comments.length}</p>
          <Link to="/post">
            <i>
              <FaComment />
            </i>
          </Link>
        </div>
      </div>
    </div>
  );
};
FeedPost.defaultProps = {
  showActions: true,
};
export default FeedPost;
