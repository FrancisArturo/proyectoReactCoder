
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCeokCQK3KxrQHH_o0JUm3vDW1CdpaY83M",
  authDomain: "proyectoreactcoder-d0e22.firebaseapp.com",
  projectId: "proyectoreactcoder-d0e22",
  storageBucket: "proyectoreactcoder-d0e22.appspot.com",
  messagingSenderId: "54948910271",
  appId: "1:54948910271:web:fae11200509f8a13bd620a"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;