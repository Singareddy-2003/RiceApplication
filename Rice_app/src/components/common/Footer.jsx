

import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footerbg text-light pt-5 pb-3">
      <div className="container">
        <div className="row text-start">

          {/* About Us */}
          <div className="col-md-3 mb-4">
            <h5 className="text-warning mb-3">About us</h5>
            <p>
              Rice Mart is your trusted source for premium rice—delivered from farms
              to your doorstep with care and tradition.
            </p>
            <a href="#" className="text-warning text-decoration-none">Read More</a>
            <div className="mt-3">
              <i className="bi bi-facebook me-3"></i>
              <i className="bi bi-whatsapp me-3"></i>
              <i className="bi bi-instagram me-3"></i>
              <i className="bi bi-twitter"></i>
            </div>
          </div>

          {/* Help */}
          <div className="col-md-2 mb-4">
            <h5 className="text-warning mb-3">Help</h5>
            <ul className="list-unstyled">
              <li><NavLink to={""} className="text-light text-decoration-none">Terms</NavLink></li>
              <li><NavLink to={""} className="text-light text-decoration-none">Conditions</NavLink></li>
              <li><NavLink to={""} className="text-light text-decoration-none">Information</NavLink></li>
              <li><NavLink to={"/privacypolicy"} className="text-light text-decoration-none">Privacy Policy</NavLink></li>
              <li><NavLink to={""} className="text-light text-decoration-none">Shipping Details</NavLink></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-2 mb-4">
            <h5 className="text-warning mb-3">Support</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Shop</a></li>
              <li><a href="#" className="text-light text-decoration-none">Blogs</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact us</a></li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-md-2 mb-4">
            <h5 className="text-warning mb-3">Information</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Search Terms</a></li>
              <li><a href="#" className="text-light text-decoration-none">Advanced Search</a></li>
              <li><a href="#" className="text-light text-decoration-none">Help & FAQs</a></li>
              <li><a href="#" className="text-light text-decoration-none">Store Location</a></li>
              <li><a href="#" className="text-light text-decoration-none">Orders & Returns</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-md-3 mb-4">
            <h5 className="text-warning mb-3">Contact us</h5>
            <p><i className="bi bi-geo-alt-fill me-2"></i>11244 , KPHB , Hyderabad .</p>
            <p><i className="bi bi-telephone-fill me-2"></i>0000 - 123 - 456789</p>
            <p><i className="bi bi-clock-fill me-2"></i>9:30 AM - 7:30 PM</p>
            <p><i className="bi bi-envelope-fill me-2"></i>mail@ricemart.com</p>
     
          </div>

        </div>

        <hr className="text-warning" />

        {/* Bottom line */}
        <div className="text-center text-light small">
          <p className="mb-1">© 2025 Rice Mart | Powered by React + Bootstrap</p>
    
        </div>
      </div>
    </footer>
  );
};

export default Footer;

