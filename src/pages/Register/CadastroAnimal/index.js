import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity, ScrollView, Text, View, StyleSheet, SafeAreaView, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RadioButton from './RadioButton';
import { CheckBox } from "@rneui/base";
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function CadastroAnimal({ navigation }) {

    // Inicio: Cadastro de imagem
    const [image, setImage] = useState(null);
    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };
    // Fim: Cadastro de imagem

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

    const [text, setText] = React.useState("");
    const [especie, setEspecie] = useState(0);
    const [sexo, setSexo] = useState(0);
    const [porte, setPorte] = useState(0);
    const [idade, setIdade] = useState(0);
    const [temperamento, setTemperamento] = useState(0);
    const [saude, setSaude] = useState(0);
    const [exigencias, setExigencias] = useState(0);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text>Tenho Interesse em cadastrar um animal para:</Text>
                <RadioButton options={options} />

                <Text>Adoção</Text>

                <View>
                    <Text style={styles.label}>NOME DO ANIMAL</Text>
                    <TextInput
                        label="Nome do Animal"
                        value={text}
                        onChangeText={text => setText(text)}
                    />
                </View>
                <View>
                    <Text style={styles.label}>FOTOS DO ANIMAL</Text>
                    <TouchableOpacity style={styles.imagePicker} onPress={() => pickImage()}>
                        <Feather name="plus-circle" size={24} color="#9D9D9E" />
                        <Text style={{ color: '#9D9D9E' }}>Adicionar Foto</Text>
                        {image && <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.label}>ESPÉCIE</Text>
                    <View style={styles.radioForm}>
                        <CheckBox
                            title='Cachorro'
                            checked={especie === 0}
                            onPress={() => setIndex(0)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            
                            wrapperStyle= {styles.radioButton}
                        />
                        <CheckBox
                            title='Gato'
                            checked={especie === 1}
                            onPress={() => setIndex(1)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            style={styles.radioButton}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.label}>SEXO</Text>
                    <View style={styles.radioForm}>
                        <CheckBox
                            title='Macho'
                            checked={sexo === 0}
                            onPress={() => setIndex(0)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"

                            wrapperStyle={styles.radioButton}
                        />
                        <CheckBox
                            title='Fêmea'
                            checked={sexo === 1}
                            onPress={() => setIndex(1)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            style={styles.radioButton}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.label}>PORTE</Text>
                    <View style={styles.radioForm}>
                        <CheckBox
                            title='Pequeno'
                            checked={porte === 0}
                            onPress={() => setIndex(0)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"

                            wrapperStyle={styles.radioButton}
                        />
                        <CheckBox
                            title='Médio'
                            checked={porte === 1}
                            onPress={() => setIndex(1)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            style={styles.radioButton}
                        />
                        <CheckBox
                            title='Grande'
                            checked={porte === 2}
                            onPress={() => setIndex(2)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            style={styles.radioButton}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.label}>IDADE</Text>
                    <View style={styles.radioForm}>
                        <CheckBox
                            title='Filhote'
                            checked={idade === 0}
                            onPress={() => setIndex(0)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"

                            wrapperStyle={styles.radioButton}
                        />
                        <CheckBox
                            title='Adulto'
                            checked={idade === 1}
                            onPress={() => setIndex(1)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            style={styles.radioButton}
                        />
                        <CheckBox
                            title='Idoso'
                            checked={idade === 2}
                            onPress={() => setIndex(1)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            style={styles.radioButton}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.label}>TEMPERAMENTO</Text>
                    <CheckBox
                        title='Brincalhão'
                        checked={false}
                        /* onPress={toggleCheckbox} */
                        iconType="material-community"
                        checkedIcon="checkbox-marked"
                        uncheckedIcon="checkbox-blank-outline"
                        checkedColor="red"
                    />
                    <CheckBox
                        title='Tímido'
                        checked={false}
                        /* onPress={toggleCheckbox} */
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                    />
                    <CheckBox
                        title='Calmo'
                        checked={false}
                        disabled
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                    />
                    <CheckBox
                        title='Guarda'
                        checked={false}
                        disabled
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                    />
                    <CheckBox
                        title='Amoroso'
                        checked={false}
                        disabled
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                    />
                    <CheckBox
                        title='Preguiçoso'
                        checked={false}
                        disabled
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                    />
                </View>
                <View>
                    <Text style={styles.label}>SAÚDE</Text>
                    <CheckBox
                        title='Vacinado'
                        checked={false}
                        disabled
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                    />
                    <CheckBox
                        title='Vermifugado'
                        checked={false}
                        disabled
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                    />
                    <CheckBox
                        title='Castrado'
                        checked={false}
                        disabled
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                    />
                    <CheckBox
                        title='Doente'
                        checked={false}
                        disabled
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                    />
                    <TextInput
                        label="Doenças do animal"
                        value={text}
                        onChangeText={text => setText(text)}
                    />
                </View>
                <View>
                    <Text style={styles.label}>EXIGÊNCIAS PARA ADOÇÃO</Text>
                    <CheckBox
                        title='Termo de adoção'
                        checked={false}
                        disabled
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                    />
                    <CheckBox
                        title='Fotos da casa'
                        checked={false}
                        disabled
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                    />
                    <CheckBox
                        title='Visita prévia ao animal'
                        checked={false}
                        disabled
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                    />
                    <CheckBox
                        title='Acompanhamento pós adoção'
                        checked={false}
                        disabled
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                    />
                    <View>
                        <CheckBox
                            title='1 mês'
                            checked={false}
                            disabled
                            iconType="material-community"
                            checkedIcon="checkbox-outline"
                            uncheckedIcon={'checkbox-blank-outline'}
                        />
                        <CheckBox
                            title='3 meses'
                            checked={false}
                            disabled
                            iconType="material-community"
                            checkedIcon="checkbox-outline"
                            uncheckedIcon={'checkbox-blank-outline'}
                        />
                        <CheckBox
                            title='6 meses'
                            checked={false}
                            disabled
                            iconType="material-community"
                            checkedIcon="checkbox-outline"
                            uncheckedIcon={'checkbox-blank-outline'}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.label}>SOBRE O ANIMAL</Text>
                    <TextInput
                        label="Compartilhe a história do animal"
                        value={text}
                        onChangeText={text => setText(text)}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress="">
                    <Text style={styles.buttonText}>COLOCAR PARA ADOÇÃO</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    imagePicker: {
        flexDirection: 'column',
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
    radioForm: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    radioButton: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        padding: 0,
        margin: 0,
    },
});