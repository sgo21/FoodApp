// import React from 'react';
import React, { useState } from "react";
// import "./App.css";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./Recipe";
import Alert from "./Alert";
import app from "./../base";
 
const Home = () => {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");

  
    const APP_ID = "37ec03f1";
    const APP_KEY = "2083bb6ed4fb63408c27d6714fba7ae6";
  
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
    const getData = async () => {
      if (query !== "") {
        const result = await Axios.get(url);
        if (!result.data.more) {
          return setAlert("This food does not exist");
        }
        console.log(result);
        setRecipes(result.data.hits);
        setQuery("");
        setAlert("");
      } else {
        setAlert("Please fill the form");
      }
    };
  
    const onChange = e => setQuery(e.target.value);
  
    const onSubmit = e => {
      e.preventDefault();
      getData();
    };
    return (
       <div>
           {/* <h1>Home</h1> */}
           {/* <p>Home page body content</p> */}
          <form onSubmit={onSubmit} className="search-form">
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
          </div>
          <button class="button" onClick={() => app.auth().signOut()}>Sign out</button> 
       </div>
    );
}
 
export default Home;