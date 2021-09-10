import React, { useState } from 'react';
import SettingsImg from '../../img/settings.svg';
import '../../css/user.css';

const Settings = () => {
  const [passwordToggle, setPasswordToggle] = useState(false);
  return (
    <div id="settings">
      <div className="settings-content">
        <h2 className="large">Settings</h2>
        <div className="setting">
          <p className="lead">Show NSFW posts(I'm over 18)</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <div className="setting">
          <p className="lead">Blur NSFW posts</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <div className="setting">
          <p className="lead">Email notifications</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
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
            <div className="change-password">
              <input type="password" placeholder="Old Password" />
              <input type="password" placeholder="New Password" />
              <input type="password" placeholder="Confirm New Password" />
              <div className="password-btn">
                <button
                  onClick={() => {
                    setPasswordToggle(false);
                  }}
                  className="btn btn-danger"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setPasswordToggle(false);
                  }}
                  className="btn btn-success"
                >
                  Save
                </button>
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

export default Settings;
