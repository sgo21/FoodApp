import React, { useState, useContext } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./Recipe";
import Alert from "./Alert";
import app from "./../base";
import { AuthContext } from "./../Auth.js";
import { Redirect } from "react-router";
import useAutocomplete from 'use-autocomplete';
import foodNames from './FoodNames';
//npm i use-autocomplete
 
const Home = () => {

    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");
    const [diet, setdiet] = useState("");
    const [completions] = useAutocomplete(query, foodNames);

   
    const APP_ID = "37ec03f1";
    const APP_KEY = "2083bb6ed4fb63408c27d6714fba7ae6";
  
    let url;
    if (diet !== "") {
      url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&diet=${diet}`;
    }
    else{
      url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    }

    const getData = async () => {
      console.log(query);
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
      // e.preventDefault();
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
              value={query}
              autoComplete="off"
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

          <div className="popout-container">
            {completions.slice(0,10).map((val, index) => ( <div className="popout-item"><button id ="autocomplete-selection" value = {val} onClick={e => setQuery(e.target.value)} key={index}>{val}</button></div>))}
          </div>

          <div className="recipes">
            {recipes !== [] &&
              recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
          </div>
          <button class="button" onClick={() => app.auth().signOut()}>Log Out</button> 
       </div>
       
    );
}
 
export default Home;