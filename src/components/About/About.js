import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const About = () => {
  return (
    <div>
      {/* header here */}
      <Header></Header>
      {/* about section here */}
      <div className="container">
      <h2 className='my-5 fw-bolder'> WELCOME TO E-LEARNER</h2>
     <div className="row">
       <div className="col-5 mt-5 ">
         <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80" alt="" className='img-fluid' />
       </div>
       <div className="col-7 mb-5  p-5">
         {/* our mission section here */}
       <h3 className='text-success fw-bold mb-4'>OUR MISSION</h3>
      <p className='lh-lg'>The Online Learning  is a collaborative community of higher education leaders and innovators, dedicated to advancing quality digital teaching and learning experiences designed to reach and engage the modern learner – anyone, anywhere, anytime. Elearner inspires innovation and quality through an extensive set of resources, including best-practice publications, quality benchmarking, leading-edge instruction, community-driven conferences, practitioner-based and empirical research, and expert guidance. The growingElearner community includes faculty members, administrators, trainers, instructional designers, and other learning professionals, as well as educational institutions, professional societies, and corporate enterprises. </p>
       </div>
     </div>
      </div>
      {/* footer section here */}
      <Footer></Footer>
    </div>
  );
};

export default About;