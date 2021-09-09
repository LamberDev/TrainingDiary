import React from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';

const SignInScreen = () => {

    return (
        <View>
            <AuthForm linkMessage="Already have an account?" navigationLink="login" buttonTitle="Sign in"></AuthForm>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SignInScreen;