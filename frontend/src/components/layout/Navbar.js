import React, { Fragment } from 'react';
import Logo from '../../img/Nameless-Title-Only-Black.png';
import { FaUser, FaCog } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { HiMailOpen } from 'react-icons/hi';
import { Link } from 'react-router-dom';

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
        <div class="dropdown">
          <button class="dropbtn">
            <div className="nav-profile">
              <img
                class="nav-profile-img"
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Profile Pic"
              />
              <h3 className="nav-username">Lorem Ipsum</h3>
            </div>
          </button>
          <div className="dropdown-content">
            <Link to="/profile">
              <i>
                <FaUser />
              </i>
              Profile
            </Link>
            <Link to="/settings">
              <i>
                <FaCog />
              </i>
              Settings
            </Link>
            <Link to="/contact">
              <i>
                <HiMailOpen />
              </i>
              Contact Us
            </Link>
            <Link to="/">
              <i>
                <FiLogOut />
              </i>
              Sign Out
            </Link>
          </div>
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
