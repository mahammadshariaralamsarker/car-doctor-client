// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyCmZ1fhvrQ0A-Vyz6ngYWDxQtUMsOcr_Fk",
  authDomain:"car-doctor-416e8.firebaseapp.com",
  projectId:"car-doctor-416e8",
  storageBucket:"car-doctor-416e8.appspot.com",
  messagingSenderId:"673952866581",
  appId:"1:673952866581:web:8ee37156853fc2cd3d091c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app