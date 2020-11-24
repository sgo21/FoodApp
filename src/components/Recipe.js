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

      let mealsArray;
      savedMealsRef.on('value', (snapshot) =>{
        mealsArray = snapshot.val();
        let newSavedMealsArray = mealsArray.push(savedMeal);
        let savedMealsData = {
          user: currentUser.uid,
          email: currentUser.email,
          savedMeals: newSavedMealsArray
        };
        updateMealsRef.set(savedMealsData);
      });
      

      // const usersRef = app.database().ref().child("users-savedmeals");

      // let mealsArrayRef = usersRef.child(currentUser.uid).child("savedMeals");

      // //mealsArrayRef.once('value').then(snapshot => snapshot.val()).then(value => setMealsArray([value]));

      // mealsArrayRef.once('value', function(snap) {
      //   let i = 0;
      //   snap.forEach(function(userSnap) {
      //      console.log(userSnap.key(), i++, userSnap.val());
      //   });
      // });

      // //console.log(mealsArray);

      // // let savedMealsArray;
      // // usersRef.child(currentUser.uid).child("savedMeals").on('value', (snapshot) =>{
      // //     snapshot.forEach(function(item) {
      // //       var itemVal = item.val();
      // //       console.log(itemVal);
      // //     });
          
      // //     //savedMealsArray = snapshot.val();
      // // });

      // let savedMealsData;
      // // if (savedMealsArray == null){
      // //   console.log("first time saving a meal");
      // //   savedMealsData = {
      // //     user: currentUser.uid,
      // //     email: currentUser.email,
      // //     savedMeals: [savedMeal]
      // //   }
      // //   console.log(savedMealsData.savedMeals);
      // // }
      // // else{
      // //   console.log("have already saved a meal");
      // //   let newSavedMealsArray = savedMealsArray.push(savedMeal);
      // //   savedMealsData = {
      // //     user: currentUser.uid,
      // //     email: currentUser.email,
      // //     savedMeals: newSavedMealsArray
      // //   }
      // // }
      
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