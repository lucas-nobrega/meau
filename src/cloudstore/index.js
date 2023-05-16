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

async function getListagem(db) {
  const pessoasCol = appFirestore.collection(db, 'listagem');
  const pesssoaSnapshot = await appFirestore.getDocs(pessoasCol);
  const pesssoaList = pesssoaSnapshot.docs.map(doc => doc.data());
  console.log(pesssoaList)
  return pesssoaList;
}

async function createModel(db) {
  try {

    const model1 =   appFirestore.addDoc(appFirestore.collection(db, "animais"), {
      Saude: 'Otima',
      Idade: '2',
      Fotos: 'null',
      Porte: 'Medio',
      Nome: 'Wanda',
      Sexo: 'Feminino',
      Temperamento: 'Calmo',
      ID: '1',
      Especie: 'Bullterrier'
    })

    const model2 =   appFirestore.addDoc(appFirestore.collection(db, "pessoas"), {
      Nome: 'Cosmo',
      ID: '1',
      Endereco: 'Sao Paulo',
      Email: 'cosmo@gmail.com',
      Idade: '10',
      Telefone: 6189652312
    })

    const model3 =   appFirestore.addDoc(appFirestore.collection(db, "listagem"), {
      ID: "Doador - ref - Animal",
      Responsavel: "Lovelace- ref",
      Endereco: "Quadra 1815",
      Dados: "Especia X - Porte Y",
      Exigencias: "Exigencia X - Exigencia Y",
      Status: "Disponivel"
    })

    const model4 =   appFirestore.addDoc(appFirestore.collection(db, "status"), {
      ID: "Listagem - ref",
      Atividade: "Adocão / Apadrinhamento / Ajuda",
      Descricao: "Text",
    })

    const model5 =   appFirestore.addDoc(appFirestore.collection(db, "adocao"), {
      ID: "Listagem - ref - Adotante",
      Chat: "Text",
      Resposta: "True/False",
    })

    const model6 =   appFirestore.addDoc(appFirestore.collection(db, "requisitosAdocao"), {
      ID: "Adocao - ref - Doador",
      TermoAdocao: ".doc",
      Foto: "Image",
      Agendamento: "Date",
      Acompanhamento: "3 meses",
    })

    const model7 =   appFirestore.addDoc(appFirestore.collection(db, "historico"), {
      ID: "Doador - ref - Animal",
      Listagem: "ref",
      Avaliacao: "Image",
      Papel: "Doador",
    })
    
  } catch (error) {
    
  }
}
  //deleteModel(db)
  //createModel(db);
  getAnimais(db);
  getPessoas(db);
  //getListagem(db)
  
  