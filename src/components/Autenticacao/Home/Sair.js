import { React, useState } from 'react';
import { StyleSheet, Linking, Text } from 'react-native';
import { Header as HeaderRNE } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Button } from '@rneui/themed';
import { auth } from './firebaseConfig';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroPessoal from '../Cadastros/CadastroPessoal';
import CadastroAnimal from '../Cadastros/CadastroAnimal';

function SairTeste({ navigation }) {
    function signOut() {
        auth.signOut()
    }
    return (
        <SafeAreaProvider>
            <Button
                title="Cadastro Pessoal"
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                buttonStyle={{
                    backgroundColor: '#88c9bf',
                    borderRadius: 5,
                }}
                titleStyle={{ fontWeight: 'Roboto Regular', fontSize: 12, color: '#434343' }}
                containerStyle={{
                    marginHorizontal: 50,
                    height: 50,
                    width: 200,
                    marginVertical: 10,
                }}
                onPress={() => navigation.navigate('CadastroPessoal')}
                />
            <Button
                title="Cadastro Animal"
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                buttonStyle={{
                    backgroundColor: '#88c9bf',
                    borderRadius: 5,
                }}
                titleStyle={{ fontWeight: 'Roboto Regular', fontSize: 12, color: '#434343' }}
                containerStyle={{
                    marginHorizontal: 50,
                    height: 50,
                    width: 200,
                    marginVertical: 10,
                }}
                onPress={() => navigation.navigate('CadastroAnimal')}
                />
            <Button
                title="Sair"
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                buttonStyle={{
                    backgroundColor: '#88c9bf',
                    borderRadius: 5,
                }}
                titleStyle={{ fontWeight: 'Roboto Regular', fontSize: 12, color: '#434343' }}
                containerStyle={{
                    marginHorizontal: 50,
                    height: 50,
                    width: 200,
                    marginVertical: 10,
                }}
                onPress={signOut}
            />
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#434343',
        marginBottom: 20,
        width: '100%',
        paddingVertical: 15,
    },
    heading: {
        color: '#434343',
        fontSize: 20,
        fontWeight: 'bold',
    },
    subheaderText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    contentContainer: {
        paddingVertical: 20
    },
});


const Stack = createNativeStackNavigator();

export default function Sair() {
    return (        
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SairTeste">
            <Stack.Screen
                name="SairTeste"
                component={SairTeste}
                options={{
                title: 'Sair Teste',
                headerStyle: {
                    backgroundColor: '#88c9bf',
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