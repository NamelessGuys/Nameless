import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alert";
import { Link, Redirect } from "react-router-dom";
import { register } from "../../actions/auth";

const Register = ({ isAuthenticated, register, setAlert }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    college: "",
    password: "",
    password2: "",
  });

  const { username, email, college, password, password2 } = formData;

  const onChangeForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (password === password2) {
      register({ username, email, college, password });
    } else {
      setAlert("Passwords do not match!", "danger", "/register");
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/feed" />;
  }

  return (
    <Fragment>
      <div className="sign-up-bg"></div>
      <div className="center">
        <div className="register-card">
          <h1>Sign Up</h1>
          <form onSubmit={(e) => onSubmitForm(e)}>
            <div className="form-item">
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={(e) => onChangeForm(e)}
              />
            </div>
            <div className="form-item">
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={(e) => onChangeForm(e)}
              />
            </div>
            <div className="form-item">
              <select name="college" onChange={(e) => onChangeForm(e)}>
                <option>Select College</option>
                <option value="dtu">DTU</option>
                <option value="nsut">NSUT</option>
                <option value="iitd">IIT D</option>
                <option value="iiitd">IIIT D</option>
                <option value="igdtuw">IGDTUW</option>
                <option value="ipu">IPU</option>
                <option value="du">DU</option>
              </select>
            </div>
            <div className="form-item">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => onChangeForm(e)}
              />
            </div>
            <div className="form-item">
              <input
                type="password"
                name="password2"
                placeholder="Confirm Password"
                onChange={(e) => onChangeForm(e)}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
