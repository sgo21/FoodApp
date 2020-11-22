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
import EditProfile from './components/EditProfile';
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
              <Route path="/" exact component={Home}/>
              <Route path="/MyProfile" component={MyProfile}/>
              <Route path="/about" component={About}/>
              {/* <Route component={Error}/> */}
              </Switch>
              <Route path="/LogIn" component={LogIn}/>
              <Route path="/SignUp" component={SignUp}/>
              <Route path="/EditProfile" component={EditProfile}/>
            </div>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;