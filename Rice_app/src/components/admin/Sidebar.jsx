import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icons

const Sidebar = () => {
  return (
    <div
      className="col-12 col-sm-12 col-md-2 col-lg-2  vh-100 sidebarbackground   shadow-sm  p-3"
      
    >
      {/* Logo / Title */}
     
     

      {/* Navigation */}
      <nav className="nav flex-column">
        <NavLink
          to="/admin"
          className="nav-link text-light mb-2 fw-bold sidebar"
          activeClassName="active"
        >
          <i className="bi bi-house me-2"></i> Home
        </NavLink>

        <NavLink
          to=""
          className="nav-link text-light mb-2 fw-bold sidebar"
          activeClassName="active"
        >
          <i className="bi bi-box-seam me-2"></i> Products
        </NavLink>
              <NavLink
          to=""
          className="nav-link text-light mb-2 fw-bold sidebar"
          activeClassName="active"
        >
          <i class="bi bi-bag-check-fill me-2"></i>  Orders
        </NavLink>

        <NavLink
          to=""
          className="nav-link text-light mb-2 fw-bold sidebar"
          activeClassName="active"
        >
          <i className="bi bi-people me-2"></i> Users
        </NavLink>

        <NavLink
          to=""
          className="nav-link text-light mb-2 fw-bold sidebar"
          activeClassName="active"
        >
         <i class="bi bi-receipt me-2"></i> Billings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
