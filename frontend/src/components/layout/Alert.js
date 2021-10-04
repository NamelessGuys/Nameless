import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeAlert } from '../../actions/alert';
import '../../css/alert.css';

const Alert = ({ alert, removeAlert }) => {
  const { msg, alertType, redirectLink } = alert;

  return (
    alert.msg !== undefined && (
      <div id="alert">
        {alertType === 'success' ? (
          <div id="success-box">
            <div className="face">
              <div className="eye"></div>
              <div className="eye right"></div>
              <div className="mouth happy"></div>
            </div>
            <div className="shadow scale"></div>
            <div className="message">
              <h1 className="alert">Success!</h1>
              <p>{`${msg}`}</p>
            </div>
            <button className="button-box">
              <Link to={redirectLink} onClick={removeAlert}>
                <h1 className="green">Continue</h1>
              </Link>
            </button>
          </div>
        ) : (
          <div id="error-box">
            <div className="face2">
              <div className="eye"></div>
              <div className="eye right"></div>
              <div className="mouth sad"></div>
            </div>
            <div className="shadow move"></div>
            <div className="message">
              <h1 className="alert">Error!</h1>
              <p>{`${msg}`}</p>
            </div>
            <button className="button-box">
              <Link to={redirectLink} onClick={removeAlert}>
                <h1 className="red">Try Again</h1>
              </Link>
            </button>
          </div>
        )}
      </div>
    )
  );
};

Alert.propTypes = {
  alert: PropTypes.object,
  removeAlert: PropTypes.func,
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps, { removeAlert })(Alert);
