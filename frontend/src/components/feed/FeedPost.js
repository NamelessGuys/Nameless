import React, { useState } from 'react';
import { GiThumbDown, GiThumbUp } from 'react-icons/gi';
import { FaComment, FaFlag, FaCopy } from 'react-icons/fa';
import Post from '../post/Post';
import { Link } from 'react-router-dom';

const FeedPost = () => {
  const [isOptionVisible, setIsOptionVisible] = useState(false);

  return (
    <div className="feed-post bg-graydark">
      <div className="post-head">
        <h3>Lorem Ipsum</h3>
        <div className="post-info">
          <div onClick={() => setIsOptionVisible(!isOptionVisible)}>
            <input type="checkbox" class="toggler" />
            <div class="hamburger">
              <div></div>
            </div>
          </div>
          <div className={`post-actions ${isOptionVisible ? 'show' : ''}`}>
            <div className="post-action">
              <i>
                <FaCopy />
              </i>{' '}
              <h4>Copy Link</h4>
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
      <Link to="/post">
        <div className="post-body">
          <div className="post-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
            architecto!
          </div>
          <div className="post-tags">
            <div className="tags">#chill #meme #fun</div>
            <div className="college-name">DTU</div>
          </div>
          <div className="post-img"></div>
        </div>
      </Link>
      <div className="post-footer">
        <div className="post-vote">
          <i>
            <GiThumbUp />
          </i>
          <p className="vote-count">69</p>
          <i>
            <GiThumbDown />
          </i>
        </div>
        <div className="post-comment">
          <p className="comment-count">69</p>
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

export default FeedPost;
