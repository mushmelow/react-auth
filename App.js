import React from "react";
import AppContainer from "./navigation";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDB8mGBBGpaPyWg-PldbeVahR4Yjw0qb_g",
  authDomain: "slizrr-bf058.firebaseapp.com",
  databaseURL: "https://slizrr-bf058.firebaseio.com",
  projectId: "slizrr-bf058",
  storageBucket: "slizrr-bf058.appspot.com",
  messagingSenderId: "915716330467",
  appId: "1:915716330467:web:3bc8381e778dcb88ff46d6",
  measurementId: "G-YQMQM3JCWV"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
  return <AppContainer />;
}
