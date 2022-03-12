import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import svgart from '../../img/undraw.svg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/feed" />;
  }

  return (
    <div className="landingSection bg-dark">
      <div className="container">
        <div className="landing-main">
          <div className="left">
            <h1>Nameless</h1>
            <h6>Anonymous.Post.Interact</h6>
            <p>
              A platform for you to interact with college students all across
              Delhi; chatrooms to share memes and stuff, ask for resources, and
              much more all of it right here and that too anonymously!
            </p>

            <Link to="/register" className="landing-btn">
              Register
            </Link>
          </div>
          <div className="right">
            <img src={svgart} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const maspStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(maspStateToProps)(Landing);
