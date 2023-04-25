import Navbar from 'react-bootstrap/Navbar';
import { View, Text } from 'react-native';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function NavbarHome() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Stack.Navigator>
            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </Stack.Navigator>
    </View>
  );
}