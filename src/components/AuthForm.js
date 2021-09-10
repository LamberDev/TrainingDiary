import React, { useState } from 'react';
import { StyleSheet,TouchableOpacity, Image, View, SafeAreaView } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Spacer from '../components/Spacer';
import { useNavigation } from '@react-navigation/native';

const AuthForm = ({ navigationLink, linkMessage, buttonTitle, action }) => {

    const navigation = useNavigation();

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false: true);
    };

    const logo = require("../img/logo.jpg");

    return (
        <SafeAreaView>
            <View style={styles.container}>

            <Spacer style={ styles.container }>
                <Image style={ styles.logo }
                    source={logo}/>
            </Spacer>
                
            <Spacer>
                <Input
                    inputContainerStyle={styles.input}
                    placeholder='Email'
                    leftIcon={ <MaterialCommunityIcons name="email-outline" size={24} color="black"
                    
                    />}
                />
            </Spacer>
            
            <Spacer>
                <Input
                    inputContainerStyle={styles.input}
                    placeholder='Password'
                    leftIcon={ <MaterialCommunityIcons name="lock-outline" size={24} color="black" /> }
                    secureTextEntry= {passwordShown}
                    rightIcon = { <TouchableOpacity onPress={ togglePasswordVisibility }>
                                    <MaterialCommunityIcons name="eye-outline" size={24} color="black" />
                                </TouchableOpacity> }
                />
            </Spacer>

            <Spacer>
                <Button 
                    title={buttonTitle}
                    onPress={ () =>  action  }
                    buttonStyle={ styles.button }
                    titleStyle={styles.buttonTitle}
                />
            </Spacer>

            <TouchableOpacity onPress={  () =>  navigation.navigate(navigationLink)  }>
                <Text style={styles.text}> {linkMessage} </Text>
            </TouchableOpacity>
            
        </View>
        </SafeAreaView>
    );
};  

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 10
    },
    text: {
        color: 'orange',
        fontSize: 14,
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginHorizontal: 15 
    },
    logo: {
        marginVertical: 10,
        width: 150,
        height: 150,
        borderRadius: 200,
        backgroundColor: 'white',
        alignSelf: 'center'
    },
    button: {
        borderRadius: 20,
        backgroundColor: 'orange'
    },
    buttonTitle: {
        fontWeight: 'bold',
        fontSize: 18,
    }
});

export default AuthForm;