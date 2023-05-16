// Navegação
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Botões
import { Button, Icon } from '@rneui/themed';

import { View, Text } from 'react-native';
import CadastroPessoal from '../Register/CadastroPessoal';
import CadastroAnimal from '../Register/CadastroAnimal';



export default function Home({ navigation }) {
    return (
        <View>
          <Text>Usuario logado</Text>
        </View>
    );
}