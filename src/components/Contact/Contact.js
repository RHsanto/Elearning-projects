import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Contact = () => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row">
          <h1 className='my-5 fw-bold text-primary'> CONTACT US </h1>
        <div className="col-6 mx-auto my-5 p-4 border text-start">
             <div className="mb-3 ">
               <label label for="exampleFormControlInput1" className="form-label"> Your name </label>
                 <input type="email" className="form-control" id="exampleFormControlInput1" placeholder='Enter Your Name'/>
            </div>
             <div className="my-4 ">
                <label for="exampleFormControlInput1" className="form-label"> Email address </label>
                 <input type="email" className="form-control" id="exampleFormControlInput1" placeholder='Enter Your Email'/>
             </div>
              <div className="mb-3">
                 <label for="exampleFormControlTextarea1" className="form-label"> Write Message </label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
             </div>
             <button type="button" className="btn btn-primary">Send Message</button>
       </div>
     </div>
  </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;