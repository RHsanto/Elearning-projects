import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <footer>
      <div className="container">
        <div className="row">
          <div className="col-5 p-5">
            <h2 className='footer-logo '>E-LEARNER</h2>
            <p className='footer-message'>Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</p>
            <div className="footer-icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-pinterest-p"></i>
           
            </div>
          </div>
          <div className="col-2 mt-5">
          <nav>
      <Link className='items' to='/home'>
      <li>Home</li>
      </Link>
      <Link className='items' to='/course'>
      <li>course</li>
      </Link>
      <Link className='items' to='/about'>
      <li>about</li>
      </Link>
      <Link className='items' to='/contact'>
      <li>contact</li>
      </Link>
        </nav>
          </div>
          <div className="col-5 ">
            <h4 className='text-light fw-bold mt-5 '>Search</h4>
            <input className='p-2 fs-6' type="text" placeholder='What do you want to learn?' />
            <button className='border-0 arrow'><i className="fas fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
      </footer>
    </div>
  );
};

export default Footer;