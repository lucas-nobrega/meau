import { StyleSheet } from 'react-native';
import React, { Component } from "react";
import Navbar from "./Navbar";
import LoginForm from "./LoginForm";

export default class Home extends Component {
    render() {
        return (
            <div className=".container-lg" style={login_styles.page}>
                <Navbar />
                <LoginForm />
            </div>

        )
    }
}

const login_styles = StyleSheet.create({
    page: {
        backgroundColor: '#88c9bf',
    },
});