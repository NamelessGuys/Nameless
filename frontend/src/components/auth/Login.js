import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import loginImage from '../../img/login_Image.svg';
import '../../css/auth.css'

const Login = () => {
  return (
    <div className='bg-dark' id='login'>
      <div className='login-container'>
        <div className='signin-content'>
          <div className='signin-image'>
            <figure>
              <img src={loginImage} alt='Login Image' />
            </figure>
          </div>

          <div className='signin-form'>
            <h2 className='form-title'>Sign In</h2>
            <form method='POST' className='login-form' id='login-form'>
              <div className='form-group'>
                <label htmlFor='email'>
                  <i>
                    <FaEnvelope />
                  </i>
                </label>
                <input
                  type='text'
                  name='email'
                  id='email'
                  placeholder='Email'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>
                  <i>
                    <FaLock />
                  </i>
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                />
              </div>
              <div className='form-group'>
                <input
                  type='checkbox'
                  name='remember-me'
                  id='remember-me'
                  className='agree-term'
                />
                <label htmlFor='remember-me' className='label-agree-term'>
                  Remember me
                </label>
              </div>
              <div className='form-group form-button'>
                <input
                  type='submit'
                  name='signin'
                  id='signin'
                  className='form-submit'
                  value='Sign In'
                />
              </div>
            </form>
            <div className='social-login'>
              <span className='social-label'>Or login with</span>
              <ul className='socials'>
                <li>
                  <a href='#'>
                    <i className='display-flex-center'>
                      <SocialIcon url='https://google.com' />
                    </i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='display-flex-center'>
                      <SocialIcon url='https://facebook.com' />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
