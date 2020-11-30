import React from 'react';
// import "./App.css";
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className="nav-bar">
         <NavLink to="/">   Home   </NavLink>
         <NavLink to="/MyProfile"> My Profile  </NavLink>
         {/* <NavLink to="/SavedMeals">  SavedMeals  </NavLink> */}
         <NavLink to="/about">  About </NavLink>
       </div>
    );
}
 
export default Navigation;
