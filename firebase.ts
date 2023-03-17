import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6i_jMocw6IHD27kySpfdcLqoyttgDgDI",
  authDomain: "mercury-b19e1.firebaseapp.com",
  projectId: "mercury-b19e1",
  storageBucket: "mercury-b19e1.appspot.com",
  messagingSenderId: "611593705824",
  appId: "1:611593705824:web:ef5d97a094477e953b6605"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firebase authentication
export const auth = getAuth(app);