// Import the functions you need from the SDKs you need
const appCloud = require('firebase/app');
const appFirestore = require('firebase/firestore');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  getAnimais(db);
  