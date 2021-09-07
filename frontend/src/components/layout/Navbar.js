import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/Nameless-Title-Only-Black.png';

const guestLinks = (
  <ul>
    <li>
      <Link to="/register">Register</Link>
    </li>
    <li>
      <Link to="/login" className="btn btn-primary">
        Login
      </Link>
    </li>
  </ul>
);

const authLinks = (
  <Fragment>
    <ul>
      <li>
        <Link to="/feed">Feed</Link>
      </li>
      <li>
        <Link to="/chatrooms">Chatrooms</Link>
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
        <Link to="/">
          <img src={Logo} alt="Nameless" />
        </Link>
      </div>
      {/* {guestLinks} */}
      {authLinks}
    </nav>
  );
};

export default Navbar;
