import * as firebase from "firebase";

export const createUser = async (email, password) => {
  console.log("CreateUser has been called.");

  return await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(error => console.warn("createUser error: ", error));
};

export const logoutUser = () => {
  firebase.auth().signOut();
};
