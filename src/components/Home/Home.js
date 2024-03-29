import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Home.css'
const Home = () => {
  const[courses,setCourses]=useState([]);

  useEffect(()=>{
    fetch('./course.json')
    .then(res => res.json())
    .then(data => setCourses(data.slice(0,4)))
  },[])
  return (
    <div>
      {/* header section here */}
      <Header></Header>
    {/* 4 courses are shown in UI */}

      {
    courses.map(course=> <div className='my-5'
     key={course.key}
     >
 {/* course card here */}
  <div className="card text-start home-card shadow-lg" >
    <div className="row ">
       <div className="col-md-5">
      <img src={course.courseThumb} className="img-fluid rounded-start" alt="img"/>
    </div>
    <div className="col-md-7">
      <div className="card-body ">
        <h3 className="card-title  fw-bolder">{course.courseName}</h3>
        <p className="card-text">{course.courseDescription.slice(0,150)}</p>
        <p className="card-text"><small className="text-muted"><i className="fas fa-star text-warning"></i> {course.rating} ({course.ratingPeople})</small></p>
        <div className=" mt-4">
          <h5 className='fw-bold'>Price : <span> ${course.price}</span> <small className='fw-normal'><del>{course.previousPrice}</del></small></h5>
        </div>
        <button type="button" class="btn btn-primary mt-4">Buy Now</button>
      </div>
    </div>
        </div>
          </div>     
             </div>)
       }
       {/* footer section here */}
      <Footer></Footer>
    </div>
  );
};

export default Home;