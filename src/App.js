// import React, { useState } from "react";
import React from 'react';
import "./App.css";


import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
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
// import background from './tempimagefood.jpg';
//import fire from './fire';

// const image = { uri: './tempimagefood.jpg' };

const App = () => {

  return (
    <div className="App">
      <div class="Logo"><Logo /></div>
      <AuthProvider>
        <BrowserRouter>
              <Navigation />
              <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/MyProfile" exact component={MyProfile}/>
              <Route path="/about" exact component={About}/>
              {/* <Route component={Error}/> */}
              </Switch>
              <Route path="/LogIn" exact component={LogIn}/>
              <Route path="/SignUp" exact component={SignUp}/>
              <Route path="/EditProfile" exact component={EditProfile}/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;