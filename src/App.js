// import React, { useState } from "react";
import React from 'react';

import "./App.css";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./components/Recipe";
import Alert from "./components/Alert";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import React, { Component } from 'react';

import Home from './components/Home';
import About from './components/About';
import MyProfile from './components/MyProfile';
import LogIn from './components/LogIn';
import Error from './components/Error';
import Navigation from './components/Navigation';




function App() {
  // const [query, setQuery] = useState("");
  // const [recipes, setRecipes] = useState([]);
  // const [alert, setAlert] = useState("");

  // const APP_ID = "37ec03f1";
  // const APP_KEY = "2083bb6ed4fb63408c27d6714fba7ae6";

  // const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  // const getData = async () => {
  //   if (query !== "") {
  //     const result = await Axios.get(url);
  //     if (!result.data.more) {
  //       return setAlert("This food does not exist");
  //     }
  //     console.log(result);
  //     setRecipes(result.data.hits);
  //     setQuery("");
  //     setAlert("");
  //   } else {
  //     setAlert("Please fill the form");
  //   }
  // };

  // const onChange = e => setQuery(e.target.value);

  // const onSubmit = e => {
  //   e.preventDefault();
  //   getData();
  // };

  return (
    <div className="App">
      <h1>Food Searching App</h1>

      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/MyProfile" component={MyProfile}/>
             <Route path="/LogIn" component={LogIn}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>

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