import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyC2nV5Hge4K2y0gCWDaTaQvUdieXlIO-vY",
  authDomain: "foodapp-35256.firebaseapp.com",
  databaseURL: "https://foodapp-35256.firebaseio.com",
  storageBucket: "foodapp-35256.appspot.com",
  messagingSenderId: "496273994456"
};
var fire = firebase.initializeApp(config);
export default fire;