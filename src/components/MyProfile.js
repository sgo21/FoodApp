import React, { useState } from 'react';
import { Redirect} from "react-router";
import { NavLink } from "react-router-dom";
import app from "./../base";
import SavedMeals from "./SavedMeals";
//import { Node, Context } from 'react-mathjax';
//import { Fraction, toTex } from 'algebra.js';
const currentUser = app.auth().currentUser;

const MyProfile = () => {

   const currentUser = app.auth().currentUser;
   const [mealsArray, setMealsArray] = useState([]);

   const database = app.database();

   const fnameRef = database.ref('users/' + currentUser.uid + '/fname');
   const lnameRef = database.ref('users/' + currentUser.uid + '/lname');
   const ageRef = database.ref('users/' + currentUser.uid + '/age');
   const weightRef = database.ref('users/' + currentUser.uid + '/weight');
   const heightRef = database.ref('users/' + currentUser.uid + '/height');
   const countryRef = database.ref('users/' + currentUser.uid + '/country');
   const dietPlanRef = database.ref('users/' + currentUser.uid + '/dietPlan');
   
   let fname;
   fnameRef.on('value', (snapshot) =>{
      fname = snapshot.val();
   });

   let lname;
   lnameRef.on('value', (snapshot) =>{
      lname = snapshot.val();
   });

   let age;
   ageRef.on('value', (snapshot) =>{
      age = snapshot.val();
   });

   let weight;
   weightRef.on('value', (snapshot) =>{
      weight = snapshot.val();
   });

   let height;
   heightRef.on('value', (snapshot) =>{
      height = snapshot.val();
   });

   let country;
   countryRef.on('value', (snapshot) =>{
      country = snapshot.val();
   });
  
   let dietPlan;
   dietPlanRef.on('value', (snapshot) =>{
      dietPlan = snapshot.val();
   });
   
   let bmi;
   if (weight >= 0 && height >= 0){
      weight = parseInt(weight);
      height = parseInt(height);
      bmi = ((weight*703)/(height*height)).toFixed(2);
   }

   if (!currentUser) {
      return <Redirect to="/LogIn" />;
   }

   const savedMealsRef = database.ref('users-savedmeals/' + currentUser.uid + '/savedMeals');
   savedMealsRef.once('value', (snapshot) => {
      setMealsArray(snapshot.val());
   });

   return (
      <div className = "mainContent">
         <h1>My Profile</h1>
         <div className = "info">
            <label><strong>Email Address:</strong> {currentUser.email}</label>
            <br/> <br/>
            <label><strong>First Name:</strong> {fname}</label> 
            <br/> <br/>
            <label><strong>Last Name:</strong> {lname}</label>
            <br/> <br/>
            <label><strong>Age:</strong> {age}</label>
            <br/> <br/>
            <label><strong>Weight:</strong> {weight} lbs.</label>
            <br/> <br/>
            <label><strong>Height:</strong> {height} in.</label>
            <br/> <br/>
            <label><strong>BMI:</strong> {bmi}</label>
            <br/> <br/>
            <label><strong>Country:</strong> {country}</label>
            <br/> <br/>
            <label><strong>Diet Plan:</strong> {dietPlan}</label>  
            <br/><br/><br/> 
            <NavLink to="/EditProfile" className="nbutton"> Edit Your Profile </NavLink>
         </div>
         <div className="favorites">
            <h2>My Saved Meals</h2>
            {mealsArray !== [] && mealsArray.slice(1, mealsArray.length).map(meal => <SavedMeals meal={meal} />)}
         </div>
      </div>
   );
}

export default MyProfile;


