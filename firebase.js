// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB371-oCclhabuF3BZllm2EBJssRTMAzTw",
  authDomain: "login-fe044-ad461.firebaseapp.com",
  projectId: "login-fe044",
  storageBucket: "login-fe044.appspot.com",
  messagingSenderId: "195190198132",
  appId: "1:195190198132:web:ba0672b828f93008f3a621"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const auth=firebase.auth()

export {auth}