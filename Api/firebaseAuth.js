import * as firebase from "firebase";

export const createUser = (email, password) => {
  console.warn("CreateUser has been called.");

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(error => console.warn("createUser error: ", error));
};

export const logoutUser = () => {
  firebase.auth().signOut();
};
