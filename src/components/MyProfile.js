import React, { useContext, useState } from 'react';
import { Redirect} from "react-router";
import { NavLink } from "react-router-dom";
import app from "./../base";
import SavedMeals from "./SavedMeals";
//import { Node, Context } from 'react-mathjax';
//import { Fraction, toTex } from 'algebra.js';

const MyProfile = () => {

   const currentUser = app.auth().currentUser;

   const fnameRef = app.database().ref('users/' + currentUser.uid + '/fname');
   const lnameRef = app.database().ref('users/' + currentUser.uid + '/lname');
   const ageRef = app.database().ref('users/' + currentUser.uid + '/age');
   const weightRef = app.database().ref('users/' + currentUser.uid + '/weight');
   const heightRef = app.database().ref('users/' + currentUser.uid + '/height');
   const countryRef = app.database().ref('users/' + currentUser.uid + '/country');
   const dietPlanRef = app.database().ref('users/' + currentUser.uid + '/dietPlan');
   
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
   
   if (!currentUser) {
      return <Redirect to="/LogIn" />;
   }

   let bmi;
   if (weight >= 0 && height >= 0){
      weight = parseInt(weight);
      height = parseInt(height);
      bmi = ((weight*703)/(height*height)).toFixed(2);
   }
   

   // function Formula(props) {
   //    return (
   //      <Context input="tex">
   //        <Node inline>{props.tex}</Node>
   //      </Context>
   //    );
   //  }
   // const a= weight;
   // const b= height;
   //  const answer = a.multiply(b);
   //  const question = <Formula tex={`${toTex(a)} × ${toTex(b)} = ${toTex(answer)}`} />;
   // // // GO TO FIREBASE AND READ THE DATA FOR THE CURRENT USER AND POPULATE THOSE PROFILE FIELDS

   return (
      <div>
         <h1>My Profile</h1>  <br /> 
         <div class="profilebox"><label>Email Address: {currentUser.email}</label> </div>
         <br/> <br/>
         <div class="profilebox"><label>First Name: {fname}</label> </div>
         <br/> <br/>
         <div class="profilebox"><p>Last Name: {lname}</p> </div>
         <br/> <br/>
         <p>Age: {age}</p>  
         <br/> <br/>
         <p>Weight: {weight} lbs.</p>  
         <br/> <br/>
         <p>Height: {height} in.</p>  
         <br/> <br/>
         <p>BMI: {bmi}</p>  
         <br/> <br/>
         <p>Country: {country}</p>  
         <br/> <br/>
         <p>Diet Plan: {dietPlan}</p>  
         <br/>
         <br/> 
         <button className="nbutton"><NavLink to="/EditProfile" > Edit Your Profile </NavLink></button>
      </div>
   );
}

export default MyProfile;


