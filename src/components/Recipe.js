import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import app from "./../base";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const [saved, setSaved] = useState(false);
  const { label, image, url, ingredients, calories, dietLabels, healthLabels} = recipe.recipe;

  function addToFavorites(){
      
      setSaved(!saved);
      let savedMeal = {
          name: label,
          ref: url
      };

      const currentUser = app.auth().currentUser;
      const savedMealsRef = app.database().ref('users-savedmeals/' + currentUser.uid + '/savedMeals');
      const updateMealsRef = app.database().ref('users-savedmeals/' + currentUser.uid);

      savedMealsRef.once('value', (snapshot) =>{
        let meals = snapshot.val();
        let mealsArray = [];
        for (let i = 0; i < meals.length; i++){
          mealsArray.push(meals[i]);
        }
        mealsArray.push(savedMeal);
        let savedMealsData = {
          user: currentUser.uid,
          email: currentUser.email,
          savedMeals: mealsArray
        };
        updateMealsRef.set(savedMealsData);
      });   
  }

  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <button id="save-meal-button" onClick={() => addToFavorites()}>Save to Favorites ❤️</button>
      {saved && <p>Recipe added to favorites!</p>}
      <a href={url} target="_blank" rel="noopener noreferrer">
        View Recipe
      </a>
      <h3> {Math.round(calories)} Calories </h3>
      <h3> {dietLabels} </h3>
      <h3> {healthLabels} </h3>
      <br/>
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeDetails ingredients={ingredients} />}
    </div>
  );
};

export default Recipe;