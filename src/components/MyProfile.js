import React, { useContext, useState } from 'react';
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import app from "./../base";

const MyProfile = () => {

   const currentUser = app.auth().currentUser;

   const fnameRef = app.database().ref('users/' + currentUser.uid + '/fname');
   const lnameRef = app.database().ref('users/' + currentUser.uid + '/lname');
   const dietPlanRef = app.database().ref('users/' + currentUser.uid + '/dietPlan');

   let fname;
   fnameRef.on('value', (snapshot) =>{
      fname = snapshot.val();
   });


   let lname;
   lnameRef.on('value', (snapshot) =>{
      lname = snapshot.val();
   });
  
   let dietPlan;
   dietPlanRef.on('value', (snapshot) =>{
      dietPlan = snapshot.val();
   });
   
   if (!currentUser) {
      return <Redirect to="/LogIn" />;
   }

   // GO TO FIREBASE AND READ THE DATA FOR THE CURRENT USER AND POPULATE THOSE PROFILE FIELDS

   return (
      <div>
         <h1>My Profile</h1>  <br /> 
         <p>Email Address: {currentUser.email}</p>  
         <br/> 
         <p>First Name: {fname}</p>  
         <br/> 
         <p>Last Name: {lname}</p>  
         <br/> 
         <p>Diet Plan: {dietPlan}</p>  
         <br/> 
         {/* Saved Meals: {currentUser.savedMeals} */}
         <br/> 
         <NavLink to="/EditProfile" className="nbutton"> Edit Your Profile </NavLink>
         
      </div>
   );
}

export default MyProfile;


