import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

const Contact = () => {
  return (
    <>
      {/* <Navbar /> */}

      <div className="container-fluid contact-bg">
        <h1 className='text-center text-light fw-bold  my-0 p-3'>Reach Out to Us </h1>

      <div className="container  ">
        <div className="row p-3">
       

          {/* Google Map */}
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d42020.26259563868!2d78.39060512400643!3d17.49279598724243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1753366302138!5m2!1sen!2sin"
              width="100%"
              height="550"
              className="rounded shadow"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rice Mart Location"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="col-12 col-sm-12 col-md-6 col-lg-6  ">
            <form>
              <h1 className='text- fw-bold'>Get in Touch</h1>
              <div className="row  my-4">
                <div className="col-md-6 col-sm-12 mb-3">
                  <label htmlFor="firstName" className="form-label fs-5 fw-bold">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="col-md-6 col-sm-12 mb-3">
                  <label htmlFor="lastName" className="form-label fs-5 fw-bold">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter your last name"
                    required
                  />
                </div>

                 <div className="col-md-12 mb-3">
                  <label htmlFor="phone" className="form-label fs-5 fw-bold">Mobile</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="mobile"
                    placeholder="Enter your Mobile"
                    required
                  />
                </div>

                <div className="col-md-12 mb-3">
                  <label htmlFor="email" className="form-label fs-5 fw-bold">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <label htmlFor="message" className="form-label fs-5 fw-bold">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Type your message..."
                    required
                  ></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <button type="submit" className="btn btn-warning  px-5">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
