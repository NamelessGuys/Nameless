import React, { useEffect, useState } from 'react';
import { setAlert } from '../../actions/alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../../actions/posts';
import FeedPost from './FeedPost';

const Posts = ({ setAlert, fetchPosts, posts }) => {
  useEffect(() => {
    fetchPosts();
  }, [posts]);
  return (
    <div id="posts">
      {posts.map((post) => (
        <FeedPost key={post.id} post={post} />
      ))}
    </div>
  );
};

Posts.propTypes = {
  setAlert: PropTypes.func.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps, { setAlert, fetchPosts })(Posts);
