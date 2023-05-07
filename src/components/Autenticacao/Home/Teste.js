import { React } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Sair from './Sair';

export default function Teste({ navigation }) {
    return (
        <SafeAreaProvider>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                title="Sair"
                onPress={() => navigation.navigate('SairTeste')}
                />
            </View>
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
});