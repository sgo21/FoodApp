import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import app from "./../base";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients, calories, dietLabels, healthLabels} = recipe.recipe;
  let saved = false;
  let repeat = false;

  function addToFavorites(){

      const currentUser = app.auth().currentUser;
      const savedMealsRef = app.database().ref('users-savedmeals/' + currentUser.uid + '/savedMeals');
      const updateMealsRef = app.database().ref('users-savedmeals/' + currentUser.uid);

      let savedMeal = {
          name: label,
          ref: url
      };

      savedMealsRef.once('value', (snapshot) =>{
        let meals = snapshot.val();
        let mealsArray = [];

        console.log(meals);

        //gets all the current meals in the ref
        for (let i = 0; i < meals.length; i++){
          mealsArray.push(meals[i]);
        }

        //goes through all the meals and checks if the one you are trying to save is already there
        for (let i = 0; i < mealsArray.length; i++) {
          if (mealsArray[i].name == savedMeal.name){
            repeat = true;
            document.getElementsByClassName(label)[0].innerHTML = "Recipe was already added!";
            break;
          }
        }

        //it doesn't repeat, so it pushes it to the database
        if (repeat == false){
          mealsArray.push(savedMeal);
          let savedMealsData = {
            user: currentUser.uid,
            email: currentUser.email,
            savedMeals: mealsArray
          };
          updateMealsRef.set(savedMealsData);
          saved = true;
          document.getElementsByClassName(label)[0].innerHTML = "Recipe added to favorites!";
        }
        
      });   

  }

  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <button id="save-meal-button" onClick={() => addToFavorites()}>Save to Favorites ♥ </button>
      <p className={label}></p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        View Recipe
      </a>
      <h3> {Math.round(calories)} Calories </h3>
      <h3> {dietLabels} </h3>
      <h3> {healthLabels} </h3>
      <br/>
      <button className = "ingredients-button" onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeDetails ingredients={ingredients} />}
    </div>
  );
};

export default Recipe;