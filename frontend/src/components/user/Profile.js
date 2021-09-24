import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const Profile = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];

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
        <button class="profile-college blob-btn">
          DTU
          <span class="blob-btn__inner">
            <span class="blob-btn__blobs">
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
            </span>
          </span>
        </button>
      </div>
      <div className="profile-score">
        <div className="profile-rank">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="User Avatar"
          />
        </div>
        <div className="profile-counter">
          <div className="counter">
            <small>Total Posts</small>
            <h2>0</h2>
          </div>
          <div className="counter">
            <small>Total Comemnts</small>
            <h2>0</h2>
          </div>
          <div className="counter">
            <small>Total Votes</small>
            <h2>0</h2>
          </div>
        </div>
      </div>
      <div className="profile-badges">
        <Carousel
          itemsToShow={3}
          itemsToScroll={1}
          enableAutoPlay
          autoPlaySpeed={4000}
        >
          {items.map((item) => (
            <Item key={item}>
              {" "}
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="User Avatar"
              />
            </Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Profile;
