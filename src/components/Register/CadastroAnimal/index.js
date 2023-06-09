import { Input, Button } from '@rneui/themed';
import { TouchableOpacity, ScrollView, Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RadioButton from './RadioButton';

export default function CadastroAnimal({ navigation }) {
    const options = [{
        label: 'Adoção',
        value: 'Adoção'
    }, {
        label: 'Apadrinhar',
        value: 'Apadrinhar'
    }, {
        label: 'Ajuda',
        value: 'Ajuda'
    }];

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text>Tenho Interesse em cadastrar um animal para:</Text>
            <RadioButton options={options} />

            <Text>Adoção</Text>
            <View>
                <Text style={styles.label}>NOME DO ANIMAL</Text>
                <Input
                    placeholder="Nome do Animal"
                />
            </View>
            <View>
                <Text style={styles.label}>FOTOS DO ANIMAL</Text>
                <TouchableOpacity style={styles.imagePicker}>
                    <Feather name="plus-circle" size={24} color="#9D9D9E" />
                    <Text style={{ color: '#9D9D9E' }}>Adicionar Foto</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.label}>ESPÉCIE</Text>
                <Input />
            </View>
            <View>
                <Text style={styles.label}>SEXO</Text>
                <Input />
            </View>
            <View>
                <Text style={styles.label}>PORTE</Text>
                <Input />
            </View>
            <View>
                <Text style={styles.label}>IDADE</Text>
                <Input />
            </View>
            <View>
                <Text style={styles.label}>TEMPERAMENTO</Text>
                <Input />
            </View>
            <View>
                <Text style={styles.label}>SAÚDE</Text>
                <Input
                    placeholder='Doenças do animal'
                />
            </View>
            <View>
                <Text style={styles.label}>EXIGÊNCIAS PARA ADOÇÃO</Text>
                <Input />
            </View>
            <View>
                <Text style={styles.label}>SOBRE O ANIMAL</Text>
                <Input
                    placeholder='Compartilhe a história do animal'
                    multiline={true}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress="">
                <Text style={styles.buttonText}>COLOCAR PARA ADOÇÃO</Text>
            </TouchableOpacity>
        </ScrollView>
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
    contentContainer: {
        paddingVertical: 20
    },
});