import React, {Component, useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "./../Auth.js";
import { NavLink } from "react-router-dom";
import app from "./../base";
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
//import Autocomplete from './Autocomplete';
//import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const EditProfile = ({ history }) => {

  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: "AIzaSyBAY1PxVKVmMzUk93pm81Qizsyy8PdEW2c",
  //   libraries
  // });

  
    
  const currentUser = app.auth().currentUser;
  
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
        // updates['/users-meals/' + userId + '/' + profilePostKey] = profileData;
    
        app.database().ref().update(updates);
        
        history.push("/MyProfile");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <h1>Edit Your Profile</h1>
      <form onSubmit={handleSave}>
      <div class="profilebox"><label>First Name: <input type="text" name="fname"/></label></div>
          <br/>
      <div class="profilebox"><label>Last Name: <input type="text" name="lname"/></label></div>
          <br/>
      <div class="profilebox"><label>Age: <input type="text" name="age"/></label></div>
          <br/>
      <div class="profilebox"><label>Weight: <input type="text" name="weight"/> lbs.</label></div>
          <br/>
      <div class="profilebox"><label>Height: <input type="text" name="height"/> in.</label></div>
           <br/> <br/>
          <label> 
           
    {/* <GooglePlacesAutocomplete
      apiKey="AIzaSyBAY1PxVKVmMzUk93pm81Qizsyy8PdEW2c"
    /> */}
  
  Country:<input type="text" name="country"
  //  placeholder={"country"
  // }
              /></label>
          <br/>
          <label>Your Diet Plan:
            <select name="dietPlan"> 
              <option value="none" selected disabled hidden>Select an Option</option>
              <option value="balanced">Balanced</option>
              <option value="high-fiber">High-Fiber</option>
              <option value="high-protein">High-Protein</option>
              <option value="low-carb">Low-Carb</option>
              <option value="low-fat">Low-Fat</option>
              <option value="low-sodium">Low-Sodium</option>
            </select>
          </label>
          <br/>
          <button type="button" input id="autocomplete" class="nbutton" type="submit">Save</button>
      </form>

    </div>
  );
};

export default withRouter(EditProfile);