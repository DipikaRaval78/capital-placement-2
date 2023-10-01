// import {  GroupIcon } from "";
import React from "react";
import "./Navbar.scss"
import { HomeOutlined } from "@ant-design/icons"



const Navbar = () => {
    return (
       
    
        <div id="navbar">
      <div className="flex flex-col items-center gap-8">
      {/* <FontAwesomeIcon icon="fas fa-user-circle" /> */}
        <div className="flex flex-col items-center gap-11">
          <HomeOutlined style={{ fontSize: 20 }} />
        </div>
      </div>
      <div className="roundacc">
                  <span className="text-class">NT</span>
      </div>
              </div>
      
    );
};

export default Navbar;
