import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../../actions/posts';
import FeedPost from './FeedPost';

const Posts = ({ fetchPosts, posts: { posts, loading } }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div id="posts">
      {posts.map((post) => (
        <FeedPost key={post.id} post={post} />
      ))}
    </div>
  );
};

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
