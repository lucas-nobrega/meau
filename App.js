import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/components/Autenticacao/Home';
import CadastroPessoal from './src/components/Autenticacao/Cadastros/CadastroPessoal';
import CadastroAnimal from './src/components/Autenticacao/Cadastros/CadastroAnimal';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="CadastroPessoal"
          component={CadastroPessoal}
          options={{
            title: 'Cadastro Pessoal',
            headerStyle: {
              backgroundColor: '#cfe9e5',
            },
            headerTintColor: '#434343',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="CadastroAnimal"
          component={CadastroAnimal}
          options={{
            title: 'Cadastro Animal',
            headerStyle: {
              backgroundColor: '#cfe9e5',
            },
            headerTintColor: '#434343',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}