import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
  apiKey: "AIzaSyAr4miEyeFDCgWcpgLOKPIdRirU5j1XKKU",
  authDomain: "vanl-f8b34.firebaseapp.com",
  projectId: "vanl-f8b34",
  storageBucket: "vanl-f8b34.appspot.com",
  // messagingSenderId: "553108426000",
  // appId: "1:553108426000:web:6c9b4403452de15f1a6995",
  // measurementId: "G-GMLKK42TD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
