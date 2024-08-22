
import { initializeApp } from "firebase/app";
import { getFirestore}  from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF-6qc7fTg8rt8GPNQFLi-zuCPSR5Eoi4",
  authDomain: "inventory-management-ddc57.firebaseapp.com",
  projectId: "inventory-management-ddc57",
  storageBucket: "inventory-management-ddc57.appspot.com",
  messagingSenderId: "121491549920",
  appId: "1:121491549920:web:eaf2b4252d5387aa67aa85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {firestore};
