// Impot bootstrap
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StyleSheet, Text, View } from 'react-native';

import Login from './componentes/Login';
import Home from './componentes/Home';

export default function App() {
  return (
    <BrowserRouter>
      <View style={styles.container}>
        <View>
          <Routes>
            <Route exact path="/" Component={Home}/>
            <Route exact path="/login" Component={Login}/>
          </Routes>
        </View>
      </View>
    </BrowserRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
