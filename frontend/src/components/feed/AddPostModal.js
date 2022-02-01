import React, { useState } from 'react';
import '../../css/feed.css';
import { FiUpload } from 'react-icons/fi';
import { addPost } from '../../actions/posts';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AddPostModal = ({ addPost }) => {
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    tags: '',
    nsfw: false,
    image: null,
  });
  const { title, text, tags, nsfw } = formData;

  const inputHandle = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const checkHandle = (e) => {
    setFormData({
      ...formData,
      nsfw: !nsfw,
    });
  };

  const imageHandle = (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    const postForm = new FormData();

    for (const [key, value] of Object.entries(formData)) {
      postForm.append(key, value);
    }

    addPost(postForm);
  };

  return (
    <div id="add-post">
      <div className="modal-header">
        <h2 className="large">Upload New Post</h2>
        <button className="btn btn-danger">X</button>
      </div>
      <div className="line"></div>
      <div className="modal-body">
        <form className="form" encType="multipart/form-data">
          <label>
            <input
              className="modal-input"
              type="text"
              placeholder="Title"
              name="title"
              value={title}
              onChange={(e) => inputHandle(e)}
              required
            ></input>
          </label>
          <label>
            <textarea
              className="modal-input input-large"
              placeholder="Text"
              name="text"
              value={text}
              onChange={(e) => inputHandle(e)}
            ></textarea>
          </label>
          <div className="modal-body-footer">
            <label>
              <input
                className="modal-input tag"
                type="text"
                placeholder="#tag1, #tag2,.... (max 5)"
                name="tags"
                value={tags}
                onChange={(e) => inputHandle(e)}
              ></input>
            </label>
            <label>
              <div className="btn upload-img">
                <FiUpload />
                <span> Upload Image</span>
                <input
                  name="image"
                  type="file"
                  className="modal-upload-image"
                  onChange={(e) => imageHandle(e)}
                />
              </div>
            </label>
          </div>
          <div className="nsfw-check">
            <label htmlFor="nsfw">
              <input
                type="checkbox"
                name="nsfw"
                className="nsfw-checkbox"
                value={nsfw}
                onChange={(e) => checkHandle(e)}
              />
              NSFW(18+)
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-success"
            onClick={(e) => submitHandle(e)}
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

AddPostModal.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(AddPostModal);
