// import React, { useState } from "react";
import React from 'react';
import "./App.css";


import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Error from './components/Error';
import Navigation from './components/Navigation';
import MyProfile from './components/MyProfile';
import { AuthProvider } from './Auth';
import { ReactComponent as Logo } from './foodie_logo.svg';

//import fire from './fire';


const App = () => {

  return (
    <div className="App">
     <div class="Logo">
      <Logo />
      </div>
      <AuthProvider>
        <BrowserRouter>
            <div className="nav-bar">
              <Navigation />
              <Switch>
              <Route path="/" component={Home} exact/>
              {/* <Route path="/LogIn" component={LogIn}/>
              <Route path="/SignUp" component={SignUp}/> */}
              <Route path="/MyProfile" component={MyProfile}/>
              <Route path="/about" component={About}/>
              {/* <Route component={Error}/> */}
              </Switch>
            </div>
            <Route path="/LogIn" component={LogIn}/>
            <Route path="/SignUp" component={SignUp}/>
        </BrowserRouter>
      </AuthProvider>

        {/* <form onSubmit={onSubmit} className="search-form">
          {alert !== "" && <Alert alert={alert} />}
          <input
            type="text"
            name="query"
            onChange={onChange}
            value={query}
            autoComplete="off"
            placeholder="Search Food"
          />
          <input type="submit" value="Search" />
        </form>
        <div className="recipes">
          {recipes !== [] &&
            recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
        </div> */}
    </div>
  );
}

export default App;