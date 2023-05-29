import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';

import Home from './src/pages/Home';
import SigIn from './src/pages/SignIn';
import CadastroAnimal from './src/pages/Register/CadastroAnimal';
import CadastroPessoal from './src/pages/Register/CadastroPessoal';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="SigIn" component={SigIn} />
        <Drawer.Screen name="CadastroAnimal" component={CadastroAnimal} />
        <Drawer.Screen name="CadadtroPessoal" component={CadastroPessoal} />
      </Drawer.Navigator>
    </NavigationContainer>
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
