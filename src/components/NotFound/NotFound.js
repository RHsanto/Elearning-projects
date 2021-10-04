import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
  return (
  <div>
    {/* not found messege section */}
    <div className='error-div'>
      <h1 className='error'> 404 </h1>
      <h3 className='error-message'>Opps.. page not found</h3>
      {/* back to home button section */}
      <Link to='/home'>
      <button className='button'>HOMEPAGE</button>
      </Link>
     
    </div>
  </div>
  );
};

export default NotFound;