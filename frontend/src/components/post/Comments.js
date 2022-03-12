import React from 'react';
import Comment from './Comment';
import { IoMdSend } from 'react-icons/io';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Comments = ({ post }) => {
  return (
    <div className="comment-box">
      <div className="comments">
        {post.comments.length > 0 &&
          post.comments.map((comment) => (
            <Comment key={comment._id} comment={comment} postId={post._id} />
          ))}
      </div>
      <div className="add-comment">
        <form>
          <textarea
            className="comment-input"
            placeholder="Write Something..."
          ></textarea>
          <button className="send-btn">
            <IoMdSend />
          </button>
        </form>
      </div>
    </div>
  );
};

Comments.propTypes = {
  post: PropTypes.object.isRequired,
};

const mapStateToProps = () => ({
  post: state.posts.post,
});

export default connect(mapStateToProps)(Comments);
