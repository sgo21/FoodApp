import React, { useState } from "react";

const SavedMeals = ({ meal }) => {

    const name = meal.name;
    const ref = meal.ref;

    // const savedMealsRef = app.database().ref('users-savedmeals/' + currentUser.uid + '/savedMeals');
    // const updateMealsRef = app.database().ref('users-savedmeals/' + currentUser.uid);

    function removeFavorite(){
        // savedMealsRef.once('value', (snapshot) =>{
        //     let meals = snapshot.val();
        //     let mealsArray = [];
    
        //     //gets all the current meals in the ref
        //     for (let i = 0; i < meals.length; i++){
        //       mealsArray.push(meals[i]);
        //     }

        //     for (let i = 0; i < mealsArray.length; i++) {
        //         if (mealsArray[i].name == savedMeal.name){
        //           repeat = true;
        //           document.getElementsByClassName(label)[0].innerHTML = "Recipe was already added!";
        //           break;
        //         }
        //     }


        // });
    }
    

    return (
        <div className="recipe">
            <a href={ref} target="_blank" rel="noopener noreferrer">{name}</a>
            <button id="remove-meal-button" onClick={() => removeFavorite()}>Remove From Favorites</button>
        </div>
    );
};

export default SavedMeals;