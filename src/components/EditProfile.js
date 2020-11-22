import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "./../Auth.js";
import { NavLink } from "react-router-dom";
import app from "./../base";

const EditProfile = ({ history }) => {
    
  const currentUser = app.auth().currentUser;
  
  const handleSave = useCallback(async event => {
    event.preventDefault();
    const { fname, lname, dietPlan } = event.target.elements;
    
    try {
        console.log("fname", fname.value, "lname", lname.value, "dietPlan", dietPlan.value);
 
        const userId = currentUser.uid;

        const profileData = {
          uid: currentUser.uid,
          email: currentUser.email,
          fname: fname.value,
          lname: lname.value,
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
          <label>First Name: <input type="text" name="fname"/></label>
          <br/>
          <label>Last Name:<input type="text" name="lname"/></label>
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
          <button type="button" type="submit">Save</button>
      </form>

    </div>
  );
};

export default withRouter(EditProfile);