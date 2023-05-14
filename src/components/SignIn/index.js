import { Input, Button } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

export default function SignIn({ navigation }) {
  return (
    <>
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
          titleStyle={{ fontWeight: 'normal', fontSize: 12, color: '#434343' }}
          containerStyle={{
              marginHorizontal: 50,
              height: 50,
              width: 200,
              marginVertical: 10,
          }}
          onPress=""
      />
      <Button radius={'sm'} type="solid"
          titleStyle={{ fontWeight: 'normal', fontSize: 12 }}
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
          <AntDesign name="facebook-square" color="white" />
            ENTRAR COM FACEBOOK
      </Button>
      <Button radius={'sm'} type="solid"
          titleStyle={{ fontWeight: 'normal', fontSize: 12 }}
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
          <Entypo name="google-" color="white" />
          ENTRAR COM GOOGLE
      </Button>
    </>
  );
}