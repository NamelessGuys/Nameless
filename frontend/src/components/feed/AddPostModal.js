import React from "react";
import "../../css/feed.css";
const AddPostModal = () => {
  return (
    <div id="add-post">
      <div className="modal-header">
        <h2 className="large">Upload New Post</h2>
        <button className="btn btn-danger">X</button>
      </div>
      <div className="line"></div>
      <div className="modal-body">
        <form className="form">
          <label>
            <input
              className="modal-input"
              type="text"
              placeholder="Title"
            ></input>
          </label>
          <label>
            <textarea
              className="modal-input input-large"
              placeholder="Text"
            ></textarea>
          </label>
          <div className="modal-body-footer">
            <label>
              <input
                className="modal-input tag"
                type="text"
                placeholder="#tag1, #tag2,.... (max 5)"
              ></input>
            </label>
            <button className="btn btn-primary">Upload Image</button>
          </div>
        </form>
      </div>
      <div className="line"></div>
      <div className="modal-footer">
        <button className="btn btn-success">Add Post</button>
      </div>
    </div>
  );
};

export default AddPostModal;
