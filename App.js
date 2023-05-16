import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import React,{ useEffect, useState } from 'react';

import Home from './src/components/Home';
import SignIn from './src/components/SignIn';
import { auth } from './src/config/firebase/firebaseConfig';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
      <SafeAreaProvider>
        {user ? <Home /> : <SignIn />}
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
