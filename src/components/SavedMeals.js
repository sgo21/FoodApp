import React, { useState } from "react";
import app from "./../base";

const SavedMeals = ({ meal }) => {

    const name = meal.name;
    const ref = meal.ref;

    // The plan is when it deletes it looks like it has deleted, so we should do DOM manipulation

    function removeFavorite(){
        const currentUser = app.auth().currentUser;
        const savedMealsRef = app.database().ref('users-savedmeals/' + currentUser.uid + '/savedMeals');
        const updateMealsRef = app.database().ref('users-savedmeals/' + currentUser.uid);

        savedMealsRef.once('value', (snapshot) =>{
            let meals = snapshot.val();
            console.log(meals);

            let removedResult = meals.filter(meal => meal.name != name);
            console.log(removedResult);
            
            let savedMealsData = {
                user: currentUser.uid,
                email: currentUser.email,
                savedMeals: removedResult
            };

            console.log(savedMealsData);

            updateMealsRef.set(savedMealsData);

            console.log(currentUser.uid);
            //updateDatabase(savedMealsData);
            //console.log(removedResult);
            //document.getElementsByClassName(name)[0].remove();
            
          });   
    }
    
    function updateDatabase(data){
        const currentUser = app.auth().currentUser;
        const updateMealsRef = app.database().ref('users-savedmeals/' + currentUser.uid);
        updateMealsRef.set(data);
    }

    return (
        <div className = {name}>
            <a href={ref} target="_blank" rel="noopener noreferrer">{name}</a>
            <button id="remove-meal-button" onClick={() => removeFavorite()}>Remove From Favorites</button>
        </div>
    );
};

export default SavedMeals;