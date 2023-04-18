import { StyleSheet } from 'react-native';

export default function LoginForm({}) {
    return (
        <div style={login_styles.div}>
            <div className="form-group" style={login_styles.inputName}>
                <input type="text" placeholder="Your Name" required  />
            </div>
            <div className="form-group" style={login_styles.inputPassword}>
                <input type="password" placeholder="Your password" required  />
            </div>

            <div style={login_styles.divLogin}>
                <button type="submit" className="btn btn-light" style={login_styles.loginButton}>Entrar</button>
            </div>

            <div style={login_styles.divFacebook}>
                <button type="button" className="btn btn-outline-dark" style={login_styles.facebookButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
                    ENTRAR COM FACEBOOK
                </button>
            </div>

            <div>
                <button type="button" className="btn btn-outline-dark" style={login_styles.googleButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                    </svg>
                        ENTRAR COM GOOGLE
                </button>
            </div>

        </div>
    );
}

const login_styles = StyleSheet.create({
    div: {
        width: 360,
        height: 56,
        paddingTop: 54,
        textAlign: "center"
    },
    inputName: {
        paddingTop: 64,
        paddingBottom: 20,
        style: "Roboto Regular",
        color: '#575756',
        paddingBottom: 8,
    },
    inputPassword: {
        style: "Roboto Regular",
        color: '#575756',
        size: 14,
        paddingBottom: 52,
    },
    loginButton: {
        backgroundColor: '#88c9bf',
        width: 232,
        height: 40,
        color: '#434343',
    },
    facebookButton: {
        backgroundColor: '#194f7c',
        width: 232,
        height: 40,
        color: '#f7f7f7',
    },
    googleButton: {
        backgroundColor: '#f15f5c',
        width: 232,
        height: 40,
        color: '#f7f7f7',
    },
    divLogin: {
        paddingBottom: 72,
    },
    divFacebook: {
        paddingBottom: 8,
    },
});