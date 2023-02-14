
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD_zXyL5xnIYSe5MDMhJgiXHBM2dkcxK0I",
  authDomain: "reservascumuru.firebaseapp.com",
  databaseURL: "https://reservascumuru-default-rtdb.firebaseio.com",
  projectId: "reservascumuru",
  storageBucket: "reservascumuru.appspot.com",
  messagingSenderId: "667385989813",
  appId: "1:667385989813:web:68a3e95d905af377e68cfc",
  measurementId: "G-BMZPLL6JR6"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
