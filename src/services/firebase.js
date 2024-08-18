// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, getDocs, addDoc, query, where, limit } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6I5CcWV_QDo3K2eLmyChZwZMPFbKBIUw",
    authDomain: "kinesis-se.firebaseapp.com",
    projectId: "kinesis-se",
    storageBucket: "kinesis-se.appspot.com",
    messagingSenderId: "796048317094",
    appId: "1:796048317094:web:a24257847b49da4a363267",
    measurementId: "G-9XNJKD3RWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };














//adicionar itens novos no firebase (rodar uma vez e depois comentar para não duplicar)

// produtos.forEach(async(obj) => {
//     const docRef = await addDoc(collection(db, "produtos"), obj);
//    console.log("Document written with ID: ", docRef.id);
// });