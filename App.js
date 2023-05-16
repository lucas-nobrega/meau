import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React,{ useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image, TouchableOpacity, SafeAreaView } from 'react-native';

import Home from './src/components/Home';
import SignIn from './src/components/SignIn';
import CadastroAnimal from './src/components/Register/CadastroAnimal';
import CadastroPessoal from './src/components/Register/CadastroPessoal';
import Introducao from './src/components/Introducao/Introducao';
import TelaErroAutorizacao from './src/components/Error/TelaErroAutorizacao.jsx';
import { auth } from './src/config/firebase/firebaseConfig';
import { SafeAreaProvider } from 'react-native-safe-area-context'; 
import { Icon } from '@rneui/themed';
import MenuButton from './src/utils/MenuButton';

const Stack = createNativeStackNavigator();

export default function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((_user) => {
        setUser(_user)
      })
      //return unsubscribe;
    }, []);
  
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {console.log("user")}
            {console.log(user?.email)}
            {user ? (
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />  
            ) : (
                <Stack.Screen name='Introducao' component={Introducao} options={{title: '', headerLeft: () => <MenuButton/>, headerStyle: {backgroundColor: '#fff'}}} />
            )}
            <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'Login', headerLeft: () => <Icon name="menu" />, headerStyle: { backgroundColor: '#cfe9e5' } }} />
            <Stack.Screen name="Cadastro Pessoal" component={CadastroPessoal} options={{ title: 'Cadastro Pessoal', headerLeft: () => <Icon name="menu" />, headerStyle: { backgroundColor: '#cfe9e5' } }} />
            <Stack.Screen name="Cadastro Animal" component={CadastroAnimal} options={{ title: 'Cadastro Animal', headerLeft: () => <Icon name="menu" />, headerStyle: { backgroundColor: '#cfe9e5' } }} />
            <Stack.Screen name='Tela Erro Autorizacao' component={TelaErroAutorizacao} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* {user ? <Home /> : <SignIn />} */}
        
      </SafeAreaProvider>
  );
}

