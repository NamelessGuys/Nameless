import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

const Register = ({ isAuthenticated, register, setAlert }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    college: '',
    password: '',
    password2: '',
  });

  return (
    <Fragment>
      <div className="sign-up-bg"></div>
      <div className="center">
        <div className="register-card">
          <h1>Sign Up</h1>
          <form>
            <div className="form-item">
              <input type="text" placeholder="Username" />
            </div>
            <div className="form-item">
              <input type="text" placeholder="Email" />
            </div>
            <div className="form-item">
              <select name="college">
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
              <input type="text" placeholder="Password" />
            </div>
            <div className="form-item">
              <input type="text" placeholder="Confirm Password" />
            </div>
            <button className="btn btn-primary" type="submit" onClick="">
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
