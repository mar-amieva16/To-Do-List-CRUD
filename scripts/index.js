// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYWYzmvihRgzqUv34CVTV6ONqch5h4v-g",
  authDomain: "maa-web-crud.firebaseapp.com",
  projectId: "maa-web-crud",
  storageBucket: "maa-web-crud.appspot.com",
  messagingSenderId: "359056381527",
  appId: "1:359056381527:web:e4456237b75e999f88f512"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
