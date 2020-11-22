import React, { useContext, useState } from 'react';
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import app from "./../base";

const MyProfile = () => {

   const currentUser = app.auth().currentUser;
   console.log("currentUser", currentUser.fname);

   if (!currentUser) {
      return <Redirect to="/LogIn" />;
   }

   return (
      <div>
         <h1>My Profile</h1>  <br /> 
         <p>Email Address: {currentUser.email}</p>  
         <br/> 
         <p>First Name: {currentUser.fname}</p>  
         <br/> 
         <p>Last Name: {currentUser.lname}</p>  
         <br/> 
         <p>Diet Plan: {currentUser.dietPlan} </p>  
         <br/> 
         {/* Saved Meals: {currentUser.savedMeals} */}
         <br/> 
         <NavLink to="/EditProfile" className="nbutton"> Edit Your Profile </NavLink>
         
      </div>
   );
}

export default MyProfile;


