import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { withTheme } from 'react-native-paper';
import CadastroPessoal from './src/components/Autenticacao/Cadastros/CadastroPessoal';
import CadastroAnimal from './src/components/Autenticacao/Cadastros/CadastroAnimal';


const Stack = createNativeStackNavigator();

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Cadastro pessoal"
          onPress={() => navigation.navigate('CadastroPessoal')}
        />
      <Button
        title="Cadastro animal"
        onPress={() => navigation.navigate('CadastroAnimal')}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
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
