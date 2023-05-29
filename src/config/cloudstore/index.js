// Import the functions you need from the SDKs you need
const appCloud = require('firebase/app');
const appFirestore = require('firebase/firestore');
//const crypto = require('crypto');

//TODO: Trocar os métodos 'require' do javascript para os imports do node
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import * as Crypto from 'expo-crypto';

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

//dDono, idAdotante
async function mudarDono(idListagem, novoDono) {
  const listagemCol = appFirestore.collection(db, 'listagem');

  //const filtragem = appFirestore.query(appFirestore.collection(db, 'listagem'), appFirestore.where('Responsavel', '==', 'donoexemplo'));
  //const filtragem2 = appFirestore.query(appFirestore.collection(db, 'listagem'), appFirestore.where('ID', '==', '1'));

  const filtragemComposta = appFirestore.query(appFirestore.collection(db, 'listagem'), appFirestore.and( appFirestore.where('Responsavel', '==', 'donoexemplo'),
  appFirestore.where('ID', '==', idListagem.toString())
  )
  );

  const querySnapshot = await appFirestore.getDocs(filtragemComposta);
  let id = null;
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    id = doc.id;
  });
  //mudar o responsavel pela listagem do animal 

  console.log(id);
  const docRef = appFirestore.doc(appFirestore.getFirestore(app), "listagem", id);
  const listagemRef = appFirestore.updateDoc(docRef, {Responsavel: "novoDono"});
  //const res = await listagemRef.update({Responsavel: "novoDono"});
  //const querySnapshot2 = await appFirestore.updateDoc(id);
  console.log(docRef)
 
  return docRef;
}


// Get a list of animais from your database
async function getAnimais(db) {
    const animaisCol = appFirestore.collection(db, 'animais');
    const animalSnapshot = await appFirestore.getDocs(animaisCol);
    const animalList = animalSnapshot.docs.map(doc => doc.data());
    console.log(animalList)
    return animalList;
}

async function inserirPessoa(nome, endereco, email, idade, telefone) {
  const id = Crypto.randomUUID();
  pessoa = {
    Nome: nome,
    ID: id,
    Endereco: endereco,
    Email: email,
    Idade: idade,
    Telefone: telefone
  }
  const pessoasCol = appFirestore.collection(db, 'pessoas');
  const pesssoaSnapshot = await appFirestore.addDoc(appFirestore.collection(db, "pessoas"), pessoa);
}

async function deletarPessoa(id) {

  try {
    const pessoasCol = appFirestore.collection(db, 'pessoas');
    const pesssoaSnapshot = await appFirestore.deleteDoc(appFirestore.doc(db, "pessoas", id));

  } catch (error) {
    console.log("Delete person error")
  }

}

async function deletarAnimal(id) {

  try {
    const animaisCol = appFirestore.collection(db, 'animais');
    const animalSnapshot = await appFirestore.deleteDoc(appFirestore.doc(db, "animais", id));

  } catch (error) {
    console.log("Delete person error")
  }

}


async function inserirAnimal(nome, idade, saude, fotos, porte, sexo, temperamento, especie) {
  const id = Crypto.randomUUID();
  animal = {
    Saude: saude,
    Idade: idade,
    Fotos: fotos,
    Porte: porte,
    Nome: nome,
    Sexo: sexo,
    Temperamento: temperamento,
    ID: id,
    Especie: especie
  }
  const animalsCol = appFirestore.collection(db, 'animais');
  const pesssoaSnapshot = await appFirestore.addDoc(appFirestore.collection(db, "animais"), animal);
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
//inserirAnimal("nome", "idade", "saude", "fotos", "porte", "sexo", "temperamento", "especie") ;
//inserirPessoa("nome", "endereco", "email", "idade", "telefone");
//deletarPessoa("7CyirDfSH2hnAjVyx1mJ")
//deletarAnimal("hMLFSzhf7ou2SPu6bbhr")
//getAnimais(db);
//getPessoas(db);
//mudarDono("referenciaexemplo", "novoDono");
//getListagem(db)

export default inserirAnimal;