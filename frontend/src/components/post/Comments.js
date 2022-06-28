import React, { useState } from "react";
import { addComment } from "../../actions/posts";
import Comment from "./Comment";
import { IoMdSend } from "react-icons/io";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Comments = ({ post, auth: { user }, addComment }) => {
  const [comment, setComment] = useState("");

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };
  const onSubmitHandeler = (e) => {
    e.preventDefault();
    if (comment !== "") {
      addComment(comment, post._id);
    }
    setComment("");
  };

  return (
    <div className='comment-box'>
      <div className='comments'>
        {post.comments.length > 0 &&
          post.comments.map((comment) => (
            <Comment key={comment._id} comment={comment} postId={post._id} />
          ))}
      </div>
      <div className='add-comment'>
        <form>
          <textarea
            className='comment-input'
            placeholder='Write Something...'
            name='comment'
            value={comment}
            onInput={(e) => onChangeHandler(e)}></textarea>
          <button className='send-btn' onClick={(e) => onSubmitHandeler(e)}>
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.posts.post,
});

export default connect(mapStateToProps, { addComment })(Comments);
