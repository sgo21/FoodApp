import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./../base";
import { AuthContext } from "./../Auth.js";
import { NavLink } from "react-router-dom";

const LogIn = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div style={{alignItems:'center'}}>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email : 
          <input name="email" type="email" placeholder="Email" />
        </label>
        <br /> 
        <label>
          Password : 
          <input name="password" type="password" placeholder="Password" />
        </label>
        <br /> 
        <button class="button" type="submit">Log in</button>
      </form>
      <NavLink to="/SignUp" className="nbutton"> New User? Create an account. </NavLink>
    </div>
  );
};

export default withRouter(LogIn);