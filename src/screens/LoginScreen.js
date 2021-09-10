import React from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';

const LoginScreen = () => {

    return (
        <View style={styles.containerBackground}>
            <AuthForm linkMessage="Don't have an account yet?" navigationLink="signin" buttonTitle="Login"></AuthForm>
        </View>
    );
};

const styles = StyleSheet.create({
    containerBackground: {
        backgroundColor: 'black',
        position: 'absolute',
        ...StyleSheet.absoluteFill
    }
});

export default LoginScreen;