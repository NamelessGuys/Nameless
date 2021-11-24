import React, { useEffect, useState } from 'react';
import SettingsImg from '../../img/settings.svg';
import { setAlert } from '../../actions/alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changePassword } from '../../actions/auth';
import { getSettings, updateSettings } from '../../actions/settings';
import '../../css/user.css';

const Settings = ({
  changePassword,
  setAlert,
  getSettings,
  updateSettings,
  auth: { user, loading },
  settings,
}) => {
  useEffect(() => {
    getSettings();
  }, [settings]);

  const [passwordToggle, setPasswordToggle] = useState(false);

  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword1: '',
    newPassword2: '',
  });
  const { oldPassword, newPassword1, newPassword2 } = formData;

  const onChangeForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandeler = (e) => {
    e.preventDefault();
    if (newPassword1 === newPassword2) {
      changePassword(newPassword1, user._id);
    } else {
      setAlert('Passwords do not match!', 'danger', '/settings');
    }
    setFormData({ oldPassword: '', newPassword1: '', newPassword2: '' });
  };

  const [showNSFW, setShowNSFW] = useState(settings.showNSFW);
  const [blurNSFW, setBlurNSFW] = useState(settings.blurNSFW);
  const [emailNotif, setEmailNotif] = useState(settings.emailNotif);

  return (
    !loading && (
      <div id="settings">
        <div className="settings-content">
          <h2 className="large">Settings</h2>
          <div className="setting">
            <p className="lead">Show NSFW posts(I'm over 18)</p>
            <label className="switch">
              <input
                type="checkbox"
                checked={showNSFW}
                onClick={() => {
                  setShowNSFW(!showNSFW);
                  updateSettings(
                    { showNSFW, blurNSFW, emailNotif },
                    settings.user.id
                  );
                }}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="setting">
            <p className="lead">Blur NSFW posts</p>
            <label className="switch">
              <input
                type="checkbox"
                checked={blurNSFW}
                onClick={() => {
                  setBlurNSFW(!blurNSFW);
                  updateSettings(
                    { showNSFW, blurNSFW, emailNotif },
                    settings.user.id
                  );
                }}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="setting">
            <p className="lead">Email notifications</p>
            <label className="switch">
              <input
                type="checkbox"
                checked={emailNotif}
                onClick={() => {
                  setEmailNotif(!emailNotif);
                  updateSettings(
                    { showNSFW, blurNSFW, emailNotif },
                    settings.user.id
                  );
                }}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className={`setting settings-btn ${passwordToggle && 'show'}`}>
            <button
              className="change-password-btn"
              onClick={() => setPasswordToggle(true)}
            >
              Change Password
            </button>
            {passwordToggle && (
              <form>
                <div className="change-password">
                  <input
                    type="password"
                    placeholder="Old Password"
                    className="change-input"
                    value={oldPassword}
                    name="oldPassword"
                    onChange={(e) => onChangeForm(e)}
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    className="change-input"
                    value={newPassword1}
                    name="newPassword1"
                    onChange={(e) => onChangeForm(e)}
                  />
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    className="change-input"
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
              </form>
            )}
          </div>
        </div>
        <div className="settings-img">
          <img src={SettingsImg} alt="settings" />
        </div>
      </div>
    )
  );
};

Settings.propTypes = {
  auth: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  changePassword: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  getSettings: PropTypes.func.isRequired,
  updateSettings: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  settings: state.settings.settings,
});

export default connect(mapStateToProps, {
  changePassword,
  setAlert,
  getSettings,
  updateSettings,
})(Settings);
