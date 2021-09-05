import React, { useState } from 'react';
import { GiThumbDown, GiThumbUp } from 'react-icons/gi';
import { FaComment, FaFlag, FaCopy } from 'react-icons/fa';

const Post = () => {
  const [isOptionVisible, setIsOptionVisible] = useState(false);

  return (
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
          <i>
            <GiThumbDown />
          </i>
        </div>
        <i>
          <FaComment />
        </i>
      </div>
    </div>
  );
};

export default Post;
