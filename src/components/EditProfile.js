import React, {Component, useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "./../Auth.js";
import { NavLink } from "react-router-dom";
import app from "./../base";

const EditProfile = ({ history }) => {

  const currentUser = app.auth().currentUser;
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
  
  const handleSave = useCallback(async event => {
    event.preventDefault();
    const { fname, lname, age, weight, height, country, dietPlan } = event.target.elements;
    
    try {
    
        console.log("fname", fname.value, "lname", lname.value, "age", age.value, "weight", weight.value, "country", country.value, "dietPlan", dietPlan.value);
 
        const userId = currentUser.uid;

        const profileData = {
          uid: currentUser.uid,
          email: currentUser.email,
          fname: fname.value,
          lname: lname.value,
          age: age.value,
          weight: weight.value,
          height: height.value,
          country: country.value,
          dietPlan : dietPlan.value
        };
    
        const updates = {};
        updates['/users/' + userId] = profileData;
    
        app.database().ref().update(updates);
        
        history.push("/MyProfile");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  const handleCancel = useCallback(async event => {
    event.preventDefault();
    try {
        history.push("/MyProfile");
    } catch (error) {
      alert(error);
    }
  }, [history]);


  return (
    <div className = "mainContent">
      <h1>Edit Your Profile</h1>
      <div className = "info">
        <form onSubmit={handleSave}>
          <label><strong>First Name:</strong> <input type="text" name="fname" defaultValue={fname}/></label><br/><br/>
          <label><strong>Last Name:</strong> <input type="text" name="lname" defaultValue={lname}/></label><br/><br/>
          <label><strong>Age: </strong><input type="text" name="age" defaultValue={age}/></label><br/><br/>
          <label><strong>Weight: </strong><input type="text" name="weight" defaultValue={weight}/> lbs.</label><br/><br/>
          <label><strong>Height: </strong><input type="text" name="height" defaultValue={height}/> in.</label><br/><br/>
          <label><strong>Country:</strong><input type="text" name="country" defaultValue={country}/></label><br/><br/>
          <label><strong>Your Diet Plan:</strong>
            <select name="dietPlan" defaultValue={dietPlan}> 
              <option value="none" selected disabled hidden>Select an Option</option>
              <option value="balanced">Balanced</option>
              <option value="high-fiber">High-Fiber</option>
              <option value="high-protein">High-Protein</option>
              <option value="low-carb">Low-Carb</option>
              <option value="low-fat">Low-Fat</option>
              <option value="low-sodium">Low-Sodium</option>
            </select>
          </label><br/><br/><br/>
          <button type="button" class="nbutton" type="submit">Save</button>
          <button type="button" class="nbutton" onClick={handleCancel}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(EditProfile);