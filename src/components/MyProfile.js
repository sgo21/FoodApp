import React, {useContext} from 'react';
import { AuthContext } from "./../Auth.js";
 
const MyProfile = () => {

   

   const { currentUser } = useContext(AuthContext);

    return (
       <div>
          <h1>My Profile</h1>
          <p>Info about user name, prefrences, nad maybe saved meals go here?</p>
          <p>This is the current user who is logged in: {currentUser.email}</p>
       </div>
    );
}
 
export default MyProfile;



