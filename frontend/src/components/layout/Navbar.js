import React, { Fragment } from 'react';
import Logo from '../../img/Nameless-Title-Only-Black.png';

const guestLinks = (
  <ul>
    <li>
      <a href="#">Register</a>
    </li>
    <li>
      <button className="btn btn-primary">Login</button>
    </li>
  </ul>
);

const authLinks = (
  <Fragment>
    <ul>
      <li>
        <a href="#">Feed</a>
      </li>
      <li>
        <a href="#">Chatrooms</a>
      </li>
      <li>
        <div className="nav-profile">
          <img
            class="nav-profile-img"
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Profile Pic"
          />
          <h3 className="nav-username">Lorem Ipsum</h3>
        </div>
      </li>
    </ul>
  </Fragment>
);

const Navbar = () => {
  return (
    <nav className="navbar bg-graydark">
      <div className="navbar-brand">
        <img src={Logo} alt="Nameless" />
      </div>
      {/* {guestLinks} */}
      {authLinks}
    </nav>
  );
};

export default Navbar;
