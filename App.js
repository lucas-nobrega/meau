import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import React,{ useEffect, useState } from 'react';

import Home from './src/components/Home';
import SignIn from './src/components/SignIn';
import Introducao from './src/components/Introducao/Introducao';
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
        <NavigationContainer>
          <Stack.Navigator>
            {user ? (
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            ) : (
                <Stack.Screen name='Introducao' component={Introducao} options={{ headerShown: false }} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
        {/* {user ? <Home /> : <SignIn />} */}
        
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
