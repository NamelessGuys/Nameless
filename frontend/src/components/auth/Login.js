import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { SocialIcon } from "react-social-icons";
import PropTypes from "prop-types";
import { FaUser, FaLock } from "react-icons/fa";
import loginImage from "../../img/login_Image.svg";
import "../../css/auth.css";
import { Redirect } from "react-router-dom";

const Login = ({ isAuthenticated, login }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChangeForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  if (isAuthenticated) {
    return <Redirect to="/feed" />;
  }

  return (
    <div className="bg-dark" id="login">
      <div className="login-container">
        <div className="signin-content">
          <div className="signin-image">
            <figure>
              <img src={loginImage} alt="Login" />
            </figure>
          </div>

          <div className="signin-form">
            <h2 className="form-title">Sign In</h2>
            <form method="POST" className="login-form" id="login-form">
              <div className="form-group">
                <label htmlFor="username">
                  <i>
                    <FaUser />
                  </i>
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => onChangeForm(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  <i>
                    <FaLock />
                  </i>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => onChangeForm(e)}
                />
              </div>
              {/* <div className="form-group">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="agree-term"
                />
                <label htmlFor="remember-me" className="label-agree-term">
                  Remember me
                </label>
              </div> */}
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  className="form-submit"
                  value="Sign In"
                  onSubmit={(e) => onSubmitForm(e)}
                />
              </div>
            </form>
            <div className="social-login">
              <span className="social-label">Or login with</span>
              <ul className="socials">
                <li>
                  <a href="https://google.com">
                    <i className="display-flex-center">
                      <SocialIcon url="https://google.com" />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com">
                    <i className="display-flex-center">
                      <SocialIcon url="https://facebook.com" />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  login: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
