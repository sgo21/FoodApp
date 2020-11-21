import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./../base";
import { Redirect } from "react-router-dom";
// import "./App.css";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  function onLogin({ history }) {
    history.push('/LogIn');
  }

  function onLogin(){
    return  <Redirect  to="/LogIn" />
 }

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button class="button" type="submit">Sign Up</button>
      </form>
      <button class="button" type="submit" onClick={onLogin}>Already have an account? Log In.</button>
    </div>
  );
};

export default withRouter(SignUp);