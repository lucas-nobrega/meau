import { React, useState } from 'react';
import { StyleSheet, Linking } from 'react-native';
import { Header as HeaderRNE } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Input, Button, Icon } from '@rneui/themed';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from './firebaseConfig';

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const [signInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);
  
    function handleSignIn(e) {
      e.preventDefault();
      signInWithEmailAndPassword(email, password);
    }
  
    if (loading) {
      return <p>carregando...</p>;
    }
    if (user) {
      return console.log(user);
    }

    return (
        <SafeAreaProvider>
            <HeaderRNE
                leftComponent={{
                    icon: 'menu',
                    color: '#434343',
                }}
                centerComponent={{ text: 'Login', style: styles.heading }}
                backgroundColor="#88c9bf"
            />
            <Input
                placeholder='E-mail'
                onChange={(e) =>setEmail(e.target.value)}
            />
            <Input
                placeholder="Password"
                secureTextEntry={true}
                onChange={(e) =>setPassword(e.target.value)}
            />

            <Button
                title="Log in"
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
                onPress={handleSignIn}
            />
            <Button radius={'sm'} type="solid"
                titleStyle={{ fontWeight: 'Roboto Regular', fontSize: 12 }}
                containerStyle={{
                    marginHorizontal: 50,
                    height: 50,
                    width: 200,
                    marginVertical: 10,
                }}
                buttonStyle={{
                    backgroundColor: '#194f7c',
                    borderRadius: 5,
                }}
                onPress={() => console.log('aye')}
            >
                <Icon name="facebook" color="white" />
                ENTRAR COM FACEBOOK
            </Button>
            <Button radius={'sm'} type="solid"
                titleStyle={{ fontWeight: 'Roboto Regular', fontSize: 12 }}
                containerStyle={{
                    marginHorizontal: 50,
                    height: 50,
                    width: 200,
                    marginVertical: 10,
                }}
                buttonStyle={{
                    backgroundColor: '#f15f5c',
                    borderRadius: 5,
                }}
                onPress={() => console.log('aye')}
            >
                <Icon name="google-plus" color="white" />
                ENTRAR COM GOOGLE
            </Button>
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
        justifyContent: 'left',
    },
    subheaderText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});