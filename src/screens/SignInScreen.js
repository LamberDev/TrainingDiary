import React from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';

const SignInScreen = () => {

    return (
        <View style={styles.containerBackground}>
            <AuthForm linkMessage="Already have an account?" navigationLink="login" buttonTitle="Sign in"></AuthForm>
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

export default SignInScreen;