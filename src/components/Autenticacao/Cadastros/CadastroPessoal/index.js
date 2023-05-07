import * as React from 'react';
import { ScrollView, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

export default function CadastroPessoal({ navigation }) {
    return (
        <SafeAreaProvider contentContainerStyle={styles.contentContainer}>
            <Text style={styles.info} > As informacoes preenchidas serao  divulgas apenas para a pessoal com a qual voce realizar o processo de adoção e/ou apadrinhamento,
                após a formalização do processo.</Text>
            <Text style={styles.text} > INFORMAÇÕES PESSOAIS </Text>
            <TextInput
                style={styles.input}
                placeholder="Nome Completo"

            />
            <TextInput
                style={styles.input}
                placeholder="Idade"
            />
            <TextInput
                style={styles.input}
                keyboardType='email-address'
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                placeholder="Estado"
            />
            <TextInput
                style={styles.input}
                placeholder="Cidade"
            />
            <TextInput
                style={styles.input}
                placeholder="Endereço"
            />
            <TextInput
                style={styles.input}
                keyboardType='phone-pad'
                placeholder="Telefone"
            />
            <Text style={styles.text}> INFORMAÇÕES DE PERFIL </Text>
            <TextInput
                style={styles.input}
                placeholder="Nome de usuario"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
            />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Confirmação da senha"
            />
            <Text style={styles.text}> FOTO DE PERFIL </Text>
            <TouchableOpacity style={styles.imagePicker}>
                <Feather name="plus-circle" size={24} color="#9D9D9E" />
                <Text style={{color: '#9D9D9E'}}>Adicionar Foto</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress="">
                <Text style={styles.buttonText}>Fazer Cadastro</Text>
            </TouchableOpacity>
            </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    imagePicker: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        padding: 16,
        marginBottom: 16,
        width: 180,
        height: 180,
    },
    contentContainer: {
        paddingVertical: 20
    },
    text: {
        color: '#589B9B',
        fontSize: 16,
        marginBottom: 12,
    },
    info: {
        backgroundColor: '#CFE9E5',
        padding: 16,
        marginBottom: 16,
        textAlign: 'center',
        borderRadius: 4,
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9',
        marginBottom: 20,
    },
    input: {
        marginBottom: 16,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#ffd358',
        padding: 16,
        borderRadius: 4,
        alignItems: 'center',
    },
    buttonText: {
        color: '#434343',
        fontWeight: 'bold',
        fontSize: 18,
    },
});