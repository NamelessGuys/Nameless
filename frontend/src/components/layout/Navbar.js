import React from "react";
import Logo from "../../img/Nameless-Title-Only-Black.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h2 className="navbar-brand">
          <img src={Logo} alt="Nameless" />
        </h2>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <button className="btn btn-primary">Sign Up</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
