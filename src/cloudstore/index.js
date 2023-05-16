// Import the functions you need from the SDKs you need
const appCloud = require('firebase/app');
const appFirestore = require('firebase/firestore');


//TODO: Trocar os métodos 'require' do javascript para os imports do node
//import { initializeApp } from 'firebase/app';
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyAqb-fVEhDyWPEJdMmFq-fCmQ6LuxpG994",
  authDomain: "miau-database.firebaseapp.com",
  projectId: "miau-database",
  storageBucket: "miau-database.appspot.com",
  messagingSenderId: "241980715406",
  appId: "1:241980715406:web:a771069d73e8188235b4df",
  measurementId: "G-KBTQK3YJWL"
};

// Initialize Firebase
const app = appCloud.initializeApp(firebaseConfig);
const db = appFirestore.getFirestore(app);


// Get a list of animais from your database
async function getAnimais(db) {
    const animaisCol = appFirestore.collection(db, 'animais');
    const animalSnapshot = await appFirestore.getDocs(animaisCol);
    const animalList = animalSnapshot.docs.map(doc => doc.data());
    console.log(animalList)
    return animalList;
  }


  async function getPessoas(db) {
    const pessoasCol = appFirestore.collection(db, 'pessoas');
    const pesssoaSnapshot = await appFirestore.getDocs(pessoasCol);
    const pesssoaList = pesssoaSnapshot.docs.map(doc => doc.data());
    console.log(pesssoaList)
    return pesssoaList;
  }

  getAnimais(db);
  getPessoas(db);
  