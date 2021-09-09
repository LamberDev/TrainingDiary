import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignInScreen from './src/screens/SignInScreen';
import HomeScreen from './src/screens/HomeScreen';

const appFlow = createSwitchNavigator({
   
  authFlow: createStackNavigator({
    login: LoginScreen,
    signin: SignInScreen
  
  }, 
  { headerMode: 'none'}),

  mainFlow: createBottomTabNavigator({
    home: HomeScreen
  })

});


const App = createAppContainer(appFlow);

export default () => {
  return <App></App>
}

