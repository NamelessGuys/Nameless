import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const Profile = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

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
      <div className="profile-content">
        <div className="profile-badges">
          {/* <Slider {...settings}>
            <div>
              <h1>1</h1>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider> */}
          <Carousel>
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
    </div>
  );
};

export default Profile;
