import { StyleSheet } from 'react-native';

export default function Navbar({}) {
    return (
        <div className="pos-f-t">
            <nav className="navbar fixed-top" style={navbar_styles.navbar}>
                <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon" style={navbar_styles.icon}></span>
                </button>
            </nav>
        </div>
    );
}

const navbar_styles = StyleSheet.create({
    navbar: {
        width: 360,
        height: 56,
        backgroundColor: '#88c9bf',
        marginBottom: 60,
        
    },
    icon: {
        width: 24,
        height: 24,
        fontSize: 15,
        paddingLeft: 16,
        paddingTop: 16,
        paddingBottom: 16,
    },
});