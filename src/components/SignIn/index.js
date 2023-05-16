
import React, { useState } from 'react';
import { Header as HeaderRNE, HeaderProps, Input, Button, Icon } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { View, StyleSheet, Text, TextInput, SafeAreaView } from 'react-native';
// Autentencação
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from '../../config/firebase/firebaseConfig';


export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  if (loading) {
    return <Text>carregando...</Text>;
  }

  if (user) {
      return console.log(user);
      /*<CadastroPessoal />*/
  }

  if (error) {
      return console.log(error.code);
  }

  return (
    <SafeAreaView style={{ marginTop: 64}}>
      <View style={{ marginEnd: 10, marginStart: 10 }}>
        <Input
          placeholder='E-mail'
          onChangeText={value => setEmail(value)}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={value => setPassword(value)}
        />
      </View>
      
      <View style={{ flexDirection: 'col', justifyContent: 'center', alignItems: 'center' }}>
      <Button
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={{
              backgroundColor: '#88c9bf',
              borderRadius: 5,
          }}
          titleStyle={{ fontWeight: 'normal', fontSize: 13, color: '#434343' }}
          containerStyle={{
              marginHorizontal: 50,
              height: 50,
              width: 200,
              marginVertical: 10,
          }}
          onPress={handleSignIn}
      >
        ENTRAR
      </Button>
      <Button radius={'sm'} type="solid"
          titleStyle={{ fontWeight: 'normal', fontSize: 13 }}
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
          <Icon name="facebook-f" color="white" type='font-awesome' />
            &nbsp;&nbsp;&nbsp;ENTRAR COM FACEBOOK
      </Button>
      <Button radius={'sm'} type="solid"
          titleStyle={{ fontWeight: 'normal', fontSize: 13 }}
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
          <Icon name="ios-logo-google" color="white" type='ionicon' />
          &nbsp;&nbsp;&nbsp;ENTRAR COM GOOGLE
      </Button>
        <Button
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={{
            backgroundColor: '#88c9bf',
            borderRadius: 5,
          }}
          titleStyle={{ fontWeight: 'normal', fontSize: 13, color: '#434343' }}
          containerStyle={{
            marginHorizontal: 50,
            height: 50,
            width: 200,
            marginVertical: 10,
          }}
          onPress={() => navigation.navigate('Tela Erro Autorizacao')}
        >
          teste tela de erro de autorização
        </Button>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  });