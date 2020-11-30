import React from 'react';
 
const About = () => {
    return (
         <div className = "mainContent"> 
            <h1>The Foodie Mission</h1>
            <div className="info black">
               <p>We aim to bring ease and efficiency to recipe searching, and promote healthy diet options among individuals. </p>

               <p>Foodie is a revolutionary food-searching application. Foodie enables its users to easily search for food items, recipes,
                  and ingredients. The user is also able to specify a specific diet plan option before searching. Once the ingredient/food item has been searched, foodie will provide various options
                  for foods that match the search criteria. Foodie pulls these foods from a back-end API called Edamam, which stores a 
                  large database of food items and its corresponding descriptions. </p>
                  
               <p>Once the user has found a recipe of his/her liking, the user is able to 'favorite' this item and save it to a personal
                  Recipe Book. The Recipe Book can be found by navigating to the user's Profile page. Each food item also displays a calorie counter and diet label 
                  in order to track overall nutrition. Additionally, the recipes include ingredients and links to external recipe websites  
               to provide a quick way to make the item. Each user is required to create a personal profile before using the Foodie application. The user's personal data 
               and relevant information is saved within the Foodie Firebase database. </p>

               <h3> Hear from others who have used Foodie: </h3>
               <iframe width="560" height="315" src="https://www.youtube.com/embed/2nL2EgHlvpw" frameborder="3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <h1>Our History</h1>
            <div className="info">
               <p> We began our creation of Foodie in the Fall of 2020 when asked to create a web application for our COMP 426 final project. Since then, we have
                  created a wireframe and many drafts of our website to understand exactly how we intended to implement our ideas. We decided
                  to create Foodie, a recipe-searching application, so that busy college students like ourselves would easily have access to foods and recipes with the ingredients
                  available in their kitchen. Foodie has had a meaningful impact on our users during the Covid pandemic; Many users are choosing to 
                  eat out less and cook from home more. We have ensured that our website meets the goals of our users, and are continuing to develop the application to this day.</p>
            </div>

            <h1>Team Members</h1>
            <div className="info black">
               <h3>Lasya Pullakhandam</h3>
               {/* <img src={} alt="LasyaImg" />  */}
               {/* Add: "import logo from './logo.png';" once we find images */}
               <p> Lasya is a junior at UNC-Chapel Hill majoring in Computer Science and minoring in Entrepreneurship.</p>
               
               <h3>Neha Jakkinpali</h3>
               {/* <img src={} alt="NehaImg" /> */}
               <p> Neha is a junior at UNC-Chapel Hill double majoring in Computer Science and Statistics and minoring in Chemistry.</p>
               
               <h3>Shruti Gopalswamy</h3>
               {/* <img src={} alt="ShrutiImg" /> */}
               <p> Shruti is a senior at UNC-Chapel Hill double majoring in Computer Science and Statistics and minoring in Chemistry.</p>
            
               <h3>Elina Shirolkar</h3>
               {/* <img src={} alt="ElinaImg" /> */}
               <p> Elina is a junior at UNC-Chapel Hill double majoring in Statistics and Computer Science and minoring in Studio Art.</p>
            </div>
          </div>
       
    );
}
 
export default About;