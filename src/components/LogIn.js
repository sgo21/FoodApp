import React, { useState } from "react";


//import SignUp from "./SignUp";


const LogIn = () => {
    const [show, setShow] = useState(false);


//     var myInput = document.getElementById("psw");
// var letter = document.getElementById("letter");
// var capital = document.getElementById("capital");
// var number = document.getElementById("number");
// var length = document.getElementById("length"); // When the user clicks on the password field, show the message box

// myInput.onfocus = function () {
//   document.getElementById("message").style.display = "block";
// }; // When the user clicks outside of the password field, hide the message box


// myInput.onblur = function () {
//   document.getElementById("message").style.display = "none";
// }; // When the user starts to type something inside the password field


// myInput.onkeyup = function () {
//   // Validate lowercase letters
//   var lowerCaseLetters = /[a-z]/g;

//   if (myInput.value.match(lowerCaseLetters)) {
//     letter.classList.remove("invalid");
//     letter.classList.add("valid");
//   } else {
//     letter.classList.remove("valid");
//     letter.classList.add("invalid");
//   } // Validate capital letters


//   var upperCaseLetters = /[A-Z]/g;

//   if (myInput.value.match(upperCaseLetters)) {
//     capital.classList.remove("invalid");
//     capital.classList.add("valid");
//   } else {
//     capital.classList.remove("valid");
//     capital.classList.add("invalid");
//   } // Validate numbers


//   var numbers = /[0-9]/g;

//   if (myInput.value.match(numbers)) {
//     number.classList.remove("invalid");
//     number.classList.add("valid");
//   } else {
//     number.classList.remove("valid");
//     number.classList.add("invalid");
//   } // Validate length


//   if (myInput.value.length >= 8) {
//     length.classList.remove("invalid");
//     length.classList.add("valid");
//   } else {
//     length.classList.remove("valid");
//     length.classList.add("invalid");
//   }
// };
    return (
       <div>
          <h3>Log In</h3>
          <p>If you have an account, login below</p>
 
          <div className="container">
            <form action="/action_page.php">
              
              <label htmlFor="usrname">Username</label>
              <input type="text" id="usrname" name="usrname" required />

              <label htmlFor="psw">Password</label>
              <input type="password" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
              
              <input type="submit" defaultValue="Submit" />
            </form>
        </div>

        <div id="message">
          <h3>Password must contain the following:</h3>
          <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
          <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
          <p id="number" className="invalid">A <b>number</b></p>
          <p id="length" className="invalid">Minimum <b>8 characters</b></p>
        </div>
        
        {/* <button onClick={() => setShow(!show)}>Sign Up</button>
      {show && <SignUp />} */}
                
       </div>
    );
}
 
export default LogIn;

// const SignUp = () => {
//    return (
//       <div>
//          <h4>sign up</h4>
//          </div>
//     );
//    }


