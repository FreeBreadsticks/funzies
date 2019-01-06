import rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA6WZ8KTil8hziZ0MUyBYHbldnubzVM980",
  authDomain: "catch-of-the-day-erika.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-erika.firebaseio.com"
});

const base = rebase.createClass(firebaseApp.database());

//This is a named export
export { firebaseApp };

//This is a default export
export default base;
