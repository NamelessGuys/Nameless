import React, { useState, useEffect } from "react";
import { GiThumbDown, GiThumbUp } from "react-icons/gi";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setCurrentPost } from "../../actions/posts";
import { FaComment, FaFlag, FaCopy } from "react-icons/fa";
import Comments from "./Comments";
import "../../css/feed.css";

const Post = ({ post, match, setCurrentPost }) => {
  useEffect(() => {
    setCurrentPost(match.params.id);
  }, [match.params.id, setCurrentPost]);
  const [isOptionVisible, setIsOptionVisible] = useState(false);

  return (
    <div id='post-page'>
      <div className='post bg-graydark'>
        <div className='post-head'>
          <h3>{post.title}</h3>
          <div className='post-info'>
            <div onClick={() => setIsOptionVisible(!isOptionVisible)}>
              <input type='checkbox' class='toggler' />
              <div class='hamburger'>
                <div></div>
              </div>
            </div>
            <div className={`post-actions ${isOptionVisible ? "show" : ""}`}>
              <div className='post-action'>
                <i>
                  <FaCopy />
                </i>{" "}
                <h4>Copy Link</h4>
              </div>
              <div className='post-action'>
                <i>
                  <FaFlag />
                </i>{" "}
                <h4>Report</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='post-body'>
          <div className='post-text'>{post.text}</div>
          <div className='post-tags'>
            <div className='tags'>
              {post.tags.map((tag) => (
                <div className='tag'>#{tag} </div>
              ))}
            </div>
            <div className='college-name'>{post.college}</div>
          </div>
          <div className='post-img'></div>
        </div>
        <div className='post-footer'>
          <div className='post-vote'>
            <i>
              <GiThumbUp />
            </i>
            <p className='vote-count'>{String(post.upvotes.length)}</p>
            <i>
              <GiThumbDown />
            </i>
          </div>
          <div className='post-comment'>
            <p className='comment-count'>{String(post.comments.length)}</p>
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
Post.propTypes = {
  post: PropTypes.object.isRequired,
  setCurrentPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.posts.post,
});

export default connect(mapStateToProps, { setCurrentPost })(Post);
