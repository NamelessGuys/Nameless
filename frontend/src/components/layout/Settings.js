import React from "react";
import SettingsImg from "../../img/settings.svg";

const Settings = () => {
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
        <div className="setting settings-btn">
          <p>Change Password</p>
        </div>
      </div>
      <div className="settings-img">
        <img src={SettingsImg} />
      </div>
    </div>
  );
};

export default Settings;
