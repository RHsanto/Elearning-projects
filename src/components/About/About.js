import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const About = () => {
  return (
    <div>
      <Header></Header>
      <div className="container">
      <h2 className='my-5'> WELCOME TO E-LEARNER</h2>
     <div className="row">
       <div className="col-8 mx-auto my-5 border shadow-lg rounded p-5">
       <h3 className='text-success fw-bold mb-4'>OUR MISSION</h3>
      <p className='lh-lg'>The Online Learning  is a collaborative community of higher education leaders and innovators, dedicated to advancing quality digital teaching and learning experiences designed to reach and engage the modern learner – anyone, anywhere, anytime. Elearner inspires innovation and quality through an extensive set of resources, including best-practice publications, quality benchmarking, leading-edge instruction, community-driven conferences, practitioner-based and empirical research, and expert guidance. The growingElearner community includes faculty members, administrators, trainers, instructional designers, and other learning professionals, as well as educational institutions, professional societies, and corporate enterprises. </p>
       </div>
     </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;