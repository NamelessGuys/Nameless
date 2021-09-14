import React from 'react';

const AddPostModal = () => {
  return (
    <div id="add-post">
      <div className="modal-header">
        <h2 className="large">Upload New Post</h2>
        <button className="btn btn-danger">X</button>
      </div>
      <div className="line"></div>
      <div className="modal-body">
        <form className="form"></form>
      </div>
      <div className="line"></div>
      <div className="modal-footer">
        <button className="btn btn-success">Add Post</button>
      </div>
    </div>
  );
};

export default AddPostModal;
