import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./../base";
import { NavLink } from "react-router-dom";
// import "./App.css";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
        console.log("email", email, "password", password);
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);

        const userId = app.auth().currentUser.uid;
        const userEmail = app.auth().currentUser.email;

        const userData = {
            user: userId,
            email: userEmail,
            fname: "",
            lname: "",
            age: "",
            weight: "",
            height: "",
            country: "",
            dietPlan : ""
        };

        const savedMealsData = {
          user: userId,
          email: userEmail,
          savedMeals: [{
            name: "No meals saved",
            ref: ""
          }]
        }
        
        // const newUserKey = app.database().ref().child('users').push().key;

        const updates = {};
        updates['/users/' + userId] = userData;
        updates['/users-savedmeals/' + userId] = savedMealsData;
        
        app.database().ref().update(updates);
        
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  //const database = app.database();

  return (
    <div className = "mainContent">
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email  :
          <input name="email" type="email" placeholder="Email" />
        </label>
        <br /> 
        <label>
          Password  :
          <input name="password" type="password" placeholder="Password" />
        </label>
        <br /> 
        <button class="button" type="submit" className="nbutton bigger">Sign Up</button>
      </form>
      <NavLink to="/LogIn" className="nbutton"> Already have an account? Log In. </NavLink>
    </div>
  );
};

export default withRouter(SignUp);