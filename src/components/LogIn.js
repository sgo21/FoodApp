import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "./../Auth.js";
import { NavLink } from "react-router-dom";
import app from "./../base";


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
    <div className = "mainContent" style={{alignItems:'center'}}>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email: 
          <input name="email" type="email" placeholder="Email" />
        </label><br/>
        
        <label>
          Password: 
          <input name="password" type="password" placeholder="Password" />
        </label>
        <br /> 
        <button class="button" type="submit" className="nbutton bigger">Log in</button><br/>
      </form>
      <NavLink to="/SignUp" className="nbutton"> New User? Create an account. </NavLink>
    </div>
  );
};

export default withRouter(LogIn);