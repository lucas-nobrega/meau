// Navegação
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Botões
import { Button, Icon } from '@rneui/themed';

import { View } from 'react-native';
import CadastroPessoal from '../Register/CadastroPessoal';
import CadastroAnimal from '../Register/CadastroAnimal';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('CadastroPessoal')}
          title="Go to CadastroPessoal"
        />
        <Button
          onPress={() => navigation.navigate('CadastroAnimal')}
          title="Go to CadastroAnimal"
        />
      </View>
    );
}

export default function Home() {
    return (
        <NavigationContainer>
            <Stack.Navigator
              initialRouteName="HomeScreen"
            >
                <Stack.Screen
                  name="HomeScreen"
                  component={HomeScreen}
                  options={{
                    headerLeft: () => (
                      <Button
                        onPress={() => alert('This is a button!')}
                        title="Info"
                        color="#fff"
                        
                      ><Icon name="menu" color="black" /></Button>
                    ),
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