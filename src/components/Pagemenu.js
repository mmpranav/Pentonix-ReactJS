import React, { useState } from "react";
import "./Pagemenu.css";
import { NavLink } from "react-router-dom";

const Pagemenu = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-pg">

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/"><b>PAGE 1</b></NavLink>
            </li>
            <li>
              <NavLink to="/alpha"><b>PAGE 2</b></NavLink>
            </li>
            <li>
              <NavLink to="/beta"><b>PAGE 3</b></NavLink>
            </li>
            
          </ul>
        </div>


        
      
      </nav>

    </>
  );
};

export default Pagemenu;