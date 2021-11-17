import React, { useState } from "react";
import SettingsImg from "../../img/settings.svg";
import { setAlert } from "../../actions/alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { changePassword } from "../../actions/auth";
import "../../css/user.css";

const Settings = ({ changePassword, setAlert, user }) => {
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword1: "",
    newPassword2: "",
  });

  const { oldPassword, newPassword1, newPassword2 } = formData;
  const onSubmitHandeler = (e) => {
    e.preventDefault();
    if (newPassword1 === newPassword2) {
      changePassword(newPassword1, user._id);
    } else {
      setAlert("Passwords do not match!", "danger", "/settings");
    }
    setFormData({ oldPassword: "", newPassword1: "", newPassword2: "" });
  };

  const onChangeForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div id="settings">
      <div className="settings-content">
        <h2 className="large">Settings</h2>
        <div className="setting">
          <p className="lead">Show NSFW posts(I'm over 18)</p>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="setting">
          <p className="lead">Blur NSFW posts</p>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="setting">
          <p className="lead">Email notifications</p>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className={`setting settings-btn ${passwordToggle && "show"}`}>
          <button
            className="change-password-btn"
            onClick={() => setPasswordToggle(true)}
          >
            Change Password
          </button>
          {passwordToggle && (
            <div className="change-password">
              <input
                type="password"
                placeholder="Old Password"
                value={oldPassword}
                name="oldPassword"
                onChange={(e) => onChangeForm(e)}
              />
              <input
                type="password"
                placeholder="New Password"
                value={newPassword1}
                name="newPassword1"
                onChange={(e) => onChangeForm(e)}
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                value={newPassword2}
                name="newPassword2"
                onChange={(e) => onChangeForm(e)}
              />
              <div className="password-btn">
                <button
                  onClick={() => {
                    setPasswordToggle(false);
                  }}
                  className="btn btn-danger"
                >
                  Cancel
                </button>
                <input
                  type="submit"
                  onClick={(e) => {
                    setPasswordToggle(false);
                    onSubmitHandeler(e);
                  }}
                  className="btn btn-success"
                  value="Save"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="settings-img">
        <img src={SettingsImg} alt="settings" />
      </div>
    </div>
  );
};

Settings.propTypes = {
  user: PropTypes.object.isRequired,
  changePassword: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ user: state.auth.user });

export default connect(mapStateToProps, { changePassword, setAlert })(Settings);
