import React from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import SectionHeader from '../components/SectionHeader';

const HomeScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
           <SectionHeader></SectionHeader>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        ...StyleSheet.absoluteFill
    },
    text: {
        color: 'white'
    },
    card: {
        backgroundColor: 'red',
        height: 200,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card2: {
        width: 100,
        height: 100,
        backgroundColor: 'white'
    }
});

export default HomeScreen;