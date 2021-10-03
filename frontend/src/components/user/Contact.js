import React from 'react';
import '../../css/user.css';
import { FiMail } from 'react-icons/fi';
import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-content">
        <div className="contact-header">
          <h2 className="text-primary large">Nameless at your service</h2>
          <a href="mailto:nameless.care@gmail.com" className="contact-mail">
            nameless.care@gmail.com
          </a>
        </div>
        <div className="row-card">
          <div className="card">
            <div className="card-background"></div>
            <div className="card-info">
              <h1>Gaurav Bansal</h1>
              <p>Full Stack developer</p>
              <br />
              <p className="card-bio">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                necessitatibus architecto magnam aliquam animi autem sit porro
                reprehenderit, at officia.
              </p>
            </div>
            <div className="card-social-icons">
              <a href="mailto:bansalgaurav726@gmail.com">
                <FiMail />
              </a>
              <a href="https://www.linkedin.com/in/gaurav-bansal-54bbb0203/">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/gaurav_b28/">
                <FaInstagramSquare />
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-background"></div>
            <div className="card-info">
              <h1>Hitesh Marwaha</h1>
              <p>Full Stack Developer</p>
              <br />
              <p className="card-bio">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque accusamus voluptatum, esse quidem quasi culpa minima
                eos. Quas, distinctio impedit!
              </p>
            </div>
            <div className="card-social-icons">
              <a href="mailto:hiteshmarwaha24@gmail.com">
                <FiMail />
              </a>
              <a href="https://www.linkedin.com/in/hitesh-marwaha-840572175/">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/hitesh_marwaha__/">
                <FaInstagramSquare />
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-background"></div>
            <div className="card-info">
              <h1>Krish Chopra</h1>
              <p>ML Engineer</p>
              <br />
              <p className="card-bio">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                necessitatibus architecto magnam aliquam animi autem sit porro
                reprehenderit, at officia.
              </p>
            </div>
            <div className="card-social-icons">
              <a href="mailto:bansal.ayush2002@gmail.com">
                <FiMail />
              </a>
              <a href="https://www.linkedin.com/in/ayush-bansal-50a6731b7/">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/ayushbansal2002/">
                <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>

        <div className="row-card-2">
          <div className="card">
            <div className="card-background"></div>
            <div className="card-info">
              <h1>Ayush Bansal</h1>
              <p>Frontend Developer</p>
              <br />
              <p className="card-bio">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi quos quidem ullam a. Dolore voluptatum impedit,
                consectetur earum rerum quos!
              </p>
            </div>
            <div className="card-social-icons">
              <a href="mailto:bansal.ayush2002@gmail.com">
                <FiMail />
              </a>
              <a href="https://www.linkedin.com/in/ayush-bansal-50a6731b7/">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/ayushbansal2002/">
                <FaInstagramSquare />
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-background"></div>
            <div className="card-info">
              <h1>Pushp Jain</h1>
              <p>Frontend Developer</p>
              <br />
              <p className="card-bio">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                necessitatibus architecto magnam aliquam animi autem sit porro
                reprehenderit, at officia.
              </p>
            </div>
            <div className="card-social-icons">
              <a href="mailto:bansal.ayush2002@gmail.com">
                <FiMail />
              </a>
              <a href="https://www.linkedin.com/in/ayush-bansal-50a6731b7/">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/ayushbansal2002/">
                <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
