import React, { useState } from 'react';
import { GiThumbDown, GiThumbUp } from 'react-icons/gi';
import { FaComment, FaFlag, FaCopy, FaBars, FaTimes } from 'react-icons/fa';

const Post = () => {
  const [isOptionVisible, setIsOptionVisible] = useState(false);

  return (
    <div className="post bg-graydark">
      <div className="post-head">
        <h3>Lorem Ipsum</h3>
        <div className="post-info">
          <div
            className="post-dots"
            onClick={() => setIsOptionVisible(!isOptionVisible)}
          >
            {isOptionVisible ? <FaTimes /> : <FaBars />}
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
