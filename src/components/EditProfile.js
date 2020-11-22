import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "./../Auth.js";
import { NavLink } from "react-router-dom";
import app from "./../base";

const EditProfile = ({ history }) => {
    
  const currentUser = app.auth().currentUser;
  const [fname, setfname] = useState(currentUser.fname);
  const [lname, setlname] = useState(currentUser.lname);
  const [dietPlan, setdietPlan] = useState(currentUser.dietPlan);
  
  const handleSave = useCallback(async event => {
    event.preventDefault();
    //const { fname, lname, dietPlan } = event.target.elements;
    
    try {
        console.log("fname", fname, "lname", lname, "dietPlan", dietPlan);
        //console.log("hello");
        // const { currentUser } = useContext(AuthContext);
        // const userId = currentUser.uid;
        // const userEmail = currentUser.email;

        // app.database().ref('users/' + userId).set({
        //   fname: fname_edit,
        //   lname: lname_edit,
        //   dietPlan : dietPlan_edit
        // });

        
        // Get a key for a new Post.
        // const newUserKey = app.database().ref().child('users').push().key;

        // const updates = {};
        // updates['/users/' + newUserKey] = userData;

        // app.database().ref().update(updates);
        
        //history.push("/MyProfile");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <h1>Edit Your Profile</h1>
      <form onSubmit={handleSave}>
          <label>First Name: <input type="text" onChange={event => setfname(event.target.value)}/></label>
          <br/>
          <label>Last Name:<input type="text" onChange={event => setlname(event.target.value)}/></label>
          <br/>
          <label>Your Diet Plan:
            <select onChange={event => setdietPlan(event.target.value)}> 
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