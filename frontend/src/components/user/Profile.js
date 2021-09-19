import React from 'react';

const Profile = () => {
  return (
    <div id="profile" className="bg-dark">
      <div className="profile-head">
        <div className="profile-avatar">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="User Avatar"
          />
          <button className="change-avatar btn btn-primary">
            Generate new avatar
          </button>
        </div>
        <div className="profile-user">
          <h3>Username</h3>
          <p>Date Joined: 04/11/2021</p>
        </div>
        <div className="profile-college">DTU</div>
      </div>
    </div>
  );
};

export default Profile;
