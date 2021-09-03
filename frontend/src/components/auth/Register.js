import React from "react";

const Register = () => {
  return (
    <div className="center">
      <div className="register-card">
        <h1>Sign Up</h1>
        <form>
          <div className="form-item">
            <input type="text" placeholder="Username" />
          </div>
          <div className="form-item">
            <input type="text" placeholder="Email" />
          </div>
          <div className="form-item">
            <input type="text" placeholder="College" />
          </div>
          <div className="form-item">
            <input type="text" placeholder="Password" />
          </div>
          <div className="form-item">
            <input type="text" placeholder="Confirm Password" />
          </div>
          <button className="btn btn-primary" type="submit" onClick="">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
