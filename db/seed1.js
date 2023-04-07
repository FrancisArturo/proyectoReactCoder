import { addDoc, collection } from "firebase/firestore";
import db from "./firebase-config.js";
import categories from "../categories.js";


const categoriesCollectionRef = collection(db, "categories");
const promises2 = categories.map((category) => addDoc(categoriesCollectionRef, category));

Promise.all(promises2).then (() => {
    console.log("Seeds cargados");
    process.exit(0);
});