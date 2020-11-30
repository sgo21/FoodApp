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
 
const Home = () => {

    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");
    const [diet, setdiet] = useState("");
    const [autoquery, setAutoQuery] = useState("");
    const [completions] = useAutocomplete(autoquery, foodNames);


   
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
      if (query !== "") {
        const result = await Axios.get(url);
        if (!result.data.more) {
          setAutoQuery("");
          return setAlert("This food does not exist");
        }
        setRecipes(result.data.hits);
        setAutoQuery("");
        setAlert("");
      } else {
        setAlert("Please fill the form");
      }
    };
  
    const onChange = e => {
      // e.preventDefault();
      setQuery(e.target.value);
      setAutoQuery(e.target.value);
      if (e.target.value == "") {
        document.getElementsByClassName("popout-container")[0].style.display = "none";
      } else {
        document.getElementsByClassName("popout-container")[0].style.display = "inline-block";
      }
    }

    const onChangeDiet = e => {
      e.preventDefault();
      setdiet(e.target.value);
    };
  
    const onSubmit = e => {
      e.preventDefault();
      console.log(query);
      document.getElementsByClassName("popout-container")[0].style.display = "none";
      getData();
    };

    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
      return <Redirect to="/LogIn" />;
    }

    return (
       <div className = "mainContent">
          {alert !== "" && <Alert alert={alert} />}
          <form onSubmit={onSubmit} className="search-form">
            <div className="input-bar">

                <input
                  type="text"
                  name="query"
                  onChange = {onChange}
                  value={query}
                  autoComplete="off"
                  placeholder="Search Food"
                />

              <select id= "diet-filter-dropdown" name="diet" onChange={onChangeDiet} value={diet}> 
                <option value="" selected disabled hidden>Select an Option</option>
                <option value="balanced">Balanced</option>
                <option value="high-protein">High-Protein</option>
                <option value="low-carb">Low-Carb</option>
                <option value="low-fat">Low-Fat</option>
              </select>

              <button class="nbutton bigger" type="submit">Search</button>
              </div>

            <div className="popout-container"> 
              {completions.slice(0,10).map((val, index) => ( <button id ="autocomplete-selection" value = {val} onClick={e => {setQuery(val); setAutoQuery(val);}} type= "submit" key={index}>{val}</button>))}
            </div> 

          </form>

          <div className="recipes">
            {recipes !== [] &&
              recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
          </div>
          <button class="nbutton bigger" onClick={() => app.auth().signOut()}>Log Out</button> 
       </div>
       
    );
}
 
export default Home;