import React, { useState } from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Input, Button, Text, Avatar } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import Spacer from '../components/Spacer';

const AuthForm = ({ navigationLink, linkMessage, buttonTitle, navigation, action }) => {

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false: true);
    };
    return (
        <SafeAreaView>
            <Spacer style={ styles.container }>
                <Image style={ styles.logo }/>
            </Spacer>
                
            <Spacer>
                <Input
                    style={styles.input}
                    placeholder='Email'
                    leftIcon={ <MaterialCommunityIcons name="email-outline" size={24} color="black" /> }
                />
            </Spacer>
            
            <Spacer>
                <Input
                    style={styles.input}
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
                />
            </Spacer>

            <TouchableOpacity onPress={  () =>  navigation.navigate(navigationLink)  }>
                <Text style={styles.text}> {linkMessage} </Text>
            </TouchableOpacity>
            
        </SafeAreaView>
    );
};  

const styles = StyleSheet.create({
    text: {
        color: 'blue',
        fontSize: 12,
        marginHorizontal: 15 
    },
    logo: {
        marginTop: 10,
        width: 150,
        height: 150,
        borderRadius: 200,
        backgroundColor: 'gray',
        alignSelf: 'center'
    },
});

export default withNavigation(AuthForm);