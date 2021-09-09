import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';

const LoginScreen = ({ navigation }) => {

    return (
        <View>
            <AuthForm linkMessage="Don't have an account yet?" navigationLink="signin" buttonTitle="Login"></AuthForm>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default LoginScreen;