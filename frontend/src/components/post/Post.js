import React, { useState } from 'react';
import { GiThumbDown, GiThumbUp } from 'react-icons/gi';
import { FaComment, FaFlag, FaCopy } from 'react-icons/fa';
import Comments from './Comments';
import '../../css/feed.css';

const Post = () => {
  const [isOptionVisible, setIsOptionVisible] = useState(false);

  return (
    <div id="post-page">
      <div className="post bg-graydark">
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
            <i>
              <FaComment />
            </i>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
