import React from 'react';
import {  NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {

  const style = {
    fontWeight: "bolder",
    color: "black"
  }
  return (
    <div className=' header  text-light'>
     <div className="container menu-items text-uppercase d-flex justify-content-between">
     <div className="logo ">
        <h1>E-learner</h1>
      </div>
    <nav className='d-flex '>
      <NavLink className='items' to='/home'
       activeStyle={style}
      >
      <li>Home</li>
      </NavLink>
      <NavLink className='items' to='/course' activeStyle={style}>
      <li>course</li>
      </NavLink>
      <NavLink className='items' to='/about'  activeStyle={style}>
      <li>about</li>
      </NavLink>
      <NavLink className='items' to='/contact' activeStyle={style}>
      <li>contact</li>
      </NavLink>
        </nav>
         <div className="icon">
         <i className="fas fa-shopping-cart"></i>
             <i className="fas fa-user"></i>
             <i className="fas fa-sign-out-alt"></i>
             <i className="fas fa-search"></i>
         </div>
     </div>
      <div className="container">
        <div className="row">
          <div className="col message  ">
            <h1>Launch your <br />
             Own online yellow-shapelearning Platform</h1>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Header;