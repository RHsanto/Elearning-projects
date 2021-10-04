import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Course = () => {
  const[courses,setCourses]=useState([]);

     useEffect(()=>{
       fetch('./course.json')
       .then(res => res.json())
       .then(data => setCourses(data))
     },[])
    return (
    <div>
      
      <Header></Header>
         <div className='mt-5'>
           {/* courses message */}
           <h1 className='fw-bolder'>Find The Right Online Course For You</h1>
         <p>You don't have to struggle alone, you've got our assistance and help.</p>
      </div>

      {/* All courses are shown in UI */}
      <div  className="row row-cols-1 row-cols-md-4 g-4 m-5">
      {
         courses.map(course=> <div  className='container' key={course.key}>
        <div  className="col">
          {/* card here */}
           <div  className="card  text-start ">
             <img src={course.courseThumb}  className="card-img-top" alt="img"/>
           <div  className="card-body p-4">
         <h5  className="card-title fw-bold">{course.courseName}</h5>
         <h6 className='fw-bold my-3'> Price : ${course.price}  <small className=''><del>{course.previousPrice}</del></small></h6> 
         <p className="card-text">{course.courseDescription.slice(0,150)}</p>
         <h6 className='d-flex justify-content-between'>
           <i className="fas fa-star text-warning"><span className='text-dark'> {course.rating}</span></i>
           <div className="people">
           <i className="fas fa-user text-primary"><span className='text-dark'> ({course.ratingPeople})</span></i>
           </div>
         </h6>
      </div>
    </div>
  </div>
         </div>)
       }
    </div>
      
      <Footer></Footer>
    </div>
  );
};

export default Course;