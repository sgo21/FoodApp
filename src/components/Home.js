// import React from 'react';
import React, { useState, useContext } from "react";
// import "./App.css";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./Recipe";
import Alert from "./Alert";
import app from "./../base";
import { AuthContext } from "./../Auth.js";
import { withRouter, Redirect } from "react-router";
 
const Home = () => {

    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");
    // const [mealType, setmealType] = useState("");
    const [diet, setdiet] = useState("");
   
  
    const APP_ID = "37ec03f1";
    const APP_KEY = "2083bb6ed4fb63408c27d6714fba7ae6";
  

    // you should make it so that it checks if query/diet value is not equal to ""
    let url;
    if (diet !== "") {
      url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&diet=${diet}`;
    }
    else{
      url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    }

  
    const getData = async () => {
      if (query !== "") {
        const result = await Axios.get(url);
        if (!result.data.more) {
          return setAlert("This food does not exist");
        }
        console.log(result);
        setRecipes(result.data.hits);
        setAlert("");
      } else {
        setAlert("Please fill the form");
      }
    };
  
    const onChange = e => {
      e.preventDefault();
      console.log(e.target.value);
      setQuery(e.target.value);
    }

    const onChangeDiet = e => {
      e.preventDefault();
      console.log(e.target.value);
      setdiet(e.target.value);
    };
  
    const onSubmit = e => {
      e.preventDefault();
      getData();
    };

    const { currentUser } = useContext(AuthContext);
    let qvalue;

    if (!currentUser) {
      return <Redirect to="/LogIn" />;
    }

    return (
       <div>
          <form onSubmit={onSubmit} className="search-form">

            {alert !== "" && <Alert alert={alert} />}
            <input
              type="text"
              name="query"
              onChange = {onChange}
              autoComplete="on"
              placeholder="Search Food"
            />
            <select name="diet" onChange={onChangeDiet}> 
              <option value="" selected disabled hidden>Select an Option</option>
              <option value="balanced">Balanced</option>
              <option value="high-protein">High-Protein</option>
              <option value="low-carb">Low-Carb</option>
              <option value="low-fat">Low-Fat</option>
            </select>
            <button class="button" type="submit">Search</button>
          </form>


          {/* <form onChangeMeal={onChangeMeal} className="mealsearch-form">
          <select name="mealPlan"> 
              <option value="none" selected disabled hidden>Select an Option</option>
              <option value={mealType}>Breakfast</option>
              <option value={mealType}>Lunch</option>
              <option value={mealType}>Dinner</option>
              <option value={mealType}>Snack</option>
              <option value={mealType}>Teatime</option>
            </select>
            <button type="button" class="nbutton" type="submit">Apply</button>
            </form> */}
            

            

          <div className="recipes">
            {recipes !== [] &&
              recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
          </div>
          <button class="button" onClick={() => app.auth().signOut()}>Log Out</button> 
       </div>
       
    );
}
 
export default Home;