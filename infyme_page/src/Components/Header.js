import React from "react";
import "../index.css";

const Header = () => {
  return (
    <div>
      <div className="header ">
        <div className="menu-icon logo">
          <span className="first"></span>
          <span className="second"></span>
          <span className="third"></span>
        </div>
        <img src="./infymelogo.png" className="logo " alt="logo" />
        <input
          className="search-box container"
          type="text"
          placeholder="Search..."
        />

        <div className="navbar-icons header">
          <img src="./chat_icon.png" className="logo" alt="chat" />
          <img src="./alert.png" className="logo" alt="alert" />
          <img src="./profile.png" className="logo" alt="profile" />
        </div>
      </div>

          
        <div>
          <span >Home &gt; Service store &gt; Portfolio Analytics</span>
          <span>View By:</span>
          <select style={{ marginLeft: "20px"}}>
            <option> Admin</option>
            <option> Admin</option>
            <option> Admin</option>
          </select>
        </div>
    </div>
  );
};

export default Header;
