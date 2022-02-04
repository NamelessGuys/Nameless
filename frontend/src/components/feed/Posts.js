import React, { useEffect } from "react";
import { setAlert } from "../../actions/alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchPosts, setCurrentPost } from "../../actions/posts";
import FeedPost from "./FeedPost";

const Posts = ({ setAlert, fetchPosts, posts, setCurrentPost }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
  return (
    <div id='posts'>
      {posts.map((post) => (
        <FeedPost
          key={post._id}
          post={post}
          onClick={() => {
            setCurrentPost(post._id);
          }}
        />
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

export default connect(mapStateToProps, {
  setAlert,
  fetchPosts,
  setCurrentPost,
})(Posts);
