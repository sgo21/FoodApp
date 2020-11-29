import React, { useState } from "react";
import app from "./../base";

const SavedMeals = ({ meal }) => {

    const name = meal.name;
    const ref = meal.ref;
    const database = app.database();

    function removeFavorite(){
        const currentUser = app.auth().currentUser;
        const savedMealsRef = database.ref('users-savedmeals/' + currentUser.uid + '/savedMeals');
       
        savedMealsRef.once('value', (snapshot) =>{
            let meals = snapshot.val();
            console.log(meals);

            let removedResult = meals.filter(meal => meal.name != name);
            console.log(removedResult);

            removedResult.push(null);
            console.log(removedResult);
            
            savedMealsRef.update(removedResult);

            /* this doesn't cause the render error but the issue is clear 
                say you remove an item, now the array length is one less (ex. 7 -> 6)
                when it updates the database, it will remove the item you want to be removed 
                however, it replaces items (0-6) of the array and leaves 7 in the database
                that is why the last item keeps repeating in the database
                we might have to figure that out and set it to null
                    -> the solution to this is appending a "null" to the array
                    -> this replaces the last item with a null
                    -> since firebase doesn't process null values it will just delete the reference from the database
            */
            
        });   
    }


    return (
        <div className = {name}>
            <a href={ref} target="_blank" rel="noopener noreferrer">{name}</a>
            <button id="remove-meal-button" onClick={() => removeFavorite()}>Remove From Favorites</button>
        </div>
    );
};

export default SavedMeals;