import React from "react";
import {View, StyleSheet,Text} from 'react-native'
import { responsiveScreenWidth } from "react-native-responsive-dimensions";  


const SectionHeader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Titulo</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FCD535',
        opacity: 0.75,
        width: responsiveScreenWidth(70),
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginTop: 20
    },
    title: {
        marginLeft: 20,
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold'
    }
});

export default SectionHeader;
