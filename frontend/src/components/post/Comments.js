import React from "react";
import Comment from "./Comment";
import { IoMdSend } from "react-icons/io";

const Comments = () => {
  return (
    <div className="comment-box">
      <div className="comments">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
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

export default Comments;
