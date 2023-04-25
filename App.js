import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { withTheme } from 'react-native-paper';


const Stack = createNativeStackNavigator();

function TelaInicial({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="ENTRAR"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
          title="ENTRAR COM FACEBOOK"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
          title="ENTRAR COM GOOGLE"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
          title="Cadastro pessoal"
          onPress={() => navigation.navigate('CadatroPessoal')}
        />
        <Button
          title="Cadastro de animais"
          onPress={() => navigation.navigate('CadatroAnimais')}
        />
    </View>
  );
}

function CadatroPessoal({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="ENTRAR"
          onPress={() => navigation.navigate('TelaInicial')}
        />
        <input
          id={id}
          type={type}
          className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
          placeholder={placeholder}
          {...register(label, {
            required: {
              value: true,
              message: 'required',
            },
          })}
        />
    </View>
  );
}

function CadatroAnimais({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="ENTRAR"
          onPress={() => navigation.navigate('Details')}
        />
        <input
          id={id}
          type={type}
          className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
          placeholder={placeholder}
          {...register(label, {
            required: {
              value: true,
              message: 'required',
            },
          })}
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
          component={TelaInicial}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#cfe9e5',
            },
            headerTintColor: '#434343',
            headerTitleStyle: {
              fontFamily: 'Roboto Medium',
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="menu"
                color="#434343"
                headerBackImageSource="menu"
              />
            ),
          }}
        />
        <Stack.Screen
          name="Cadatro Pessoal"
          component={CadatroPessoal}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#cfe9e5',
            },
            headerTintColor: '#434343',
            headerTitleStyle: {
              fontFamily: 'Roboto Medium',
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <Button
                onPress={() => navigation.navigate('CadatroPessoal')}
                title="menu"
                color="#434343"
                headerBackImageSource="menu"
              />
            ),
          }}
        />
        <Stack.Screen
          name="Cadatro Animais"
          component={CadatroAnimais}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#cfe9e5',
            },
            headerTintColor: '#434343',
            headerTitleStyle: {
              fontFamily: 'Roboto Medium',
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <Button
                onPress={() => navigation.navigate('CadatroAnimais')}
                title="menu"
                color="#434343"
                headerBackImageSource="menu"
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
