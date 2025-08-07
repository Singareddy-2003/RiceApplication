import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Avatar, Dropdown, Menu } from "antd";
import { UserOutlined, LogoutOutlined, QuestionCircleFilled ,SettingFilled } from "@ant-design/icons";
import { useAuth } from "../../store/context/AuthContext";
const Header = () => {
  const [theme, setTheme] = useState("light");
 const {user,logout} = useAuth()

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-bs-theme", newTheme); // Bootstrap 5.3 theme support
  };

  const handleMenuClick = ({ key }) => {
    if (key === "logout") {
    logout();
      // logout logic
      
   
      console.log("Logging out...");
    } else {
      console.log(`Navigate to ${key}`);
    }
  };

  const dropdownMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="orders" icon={<QuestionCircleFilled/>}>
        Help
      </Menu.Item>
       <Menu.Item key="settings" icon={<SettingFilled/>}>
        Settings
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <nav className="navbar position-sticky navbar-expand-lg my-0 p-2  bg-warning px-3 border-bottom shadow-sm sticky-top">
      {/* Brand */}
      <a className="navbar-brand d-flex align-items-center fw-bold text-success fs-4" href="#">
        <img
          src="/src/assets/rice.png"
          alt="logo"
          height="30"
          className="me-2"
        />
        <span className="text-dark">Rice</span> Mart
      </a>

      {/* Toggler Button for Mobile */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible Content */}
      <div className="collapse navbar-collapse" id="navbarContent">
        {/* Search Bar */}
        <form className="d-flex mx-auto my-2 my-lg-0" style={{ width: "600px" }}>
          <input
            className="form-control"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
          <button className="btn btn-success ms-2" > Search
            {/* <i className="bi bi-search fw-bold "></i> */}
          </button>
        </form>

      {/* Welcome Text */}
<h5 className="me-3 my-auto  fw-bold">
  Welcome {user?.["Full Name"]|| user?.email || "Guest"}👋🏻
</h5>


        {/* Right Side */}
        <ul className="navbar-nav ms-auto align-items-center mt-2 mt-lg-0">
          {/* Dark/Light Mode Toggle */}
          <li className="nav-item me-3">
            <button
              className="btn btn-outline-secondary"
              onClick={toggleTheme}
              title="Toggle Theme"
            >
              {theme === "light"  ? (
                <i className="bi bi-moon-fill"></i>
              ) : (
                <i className="bi bi-sun-fill text-warning"></i>
              )}
            </button>
          </li>

          {/* Profile Dropdown */}
          <li className="nav-item">
            <Dropdown overlay={dropdownMenu} placement="bottomRight" trigger={["click"]}>
              <Avatar
                icon={<UserOutlined />}
                style={{ backgroundColor: "green", cursor: "pointer" }}
              />
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
