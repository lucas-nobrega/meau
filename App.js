import 'react-native-gesture-handler';
import React,{ useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/components/Autenticacao/Home';
import Sair from './src/components/Autenticacao/Home/Sair';
import { SafeAreaView } from 'react-native';
import { auth } from './src/components/Autenticacao/Home/firebaseConfig';


const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((_user) => {
      setUser(_user)
    })
    return unsubscribe;
  }, []);

  return (
    <SafeAreaView>
      {user ? <Sair /> : <Home />}
    </SafeAreaView>
  );
}