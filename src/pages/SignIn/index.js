import * as React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { View, SafeAreaView, Text } from 'react-native';

export default function SigIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View>
        <TextInput
          label="E-mail"
          value={email}
          onChangeText={text => setEmail(email)}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={text => setPassword(password)}
        />
      </View>
    </SafeAreaView>
  );
}