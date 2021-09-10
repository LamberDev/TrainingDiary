import React, { useState } from 'react';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignInScreen from './src/screens/SignInScreen';
import HomeScreen from './src/screens/HomeScreen';


const AuthStack = createStackNavigator();
const TabSatck = createBottomTabNavigator();



const App = () => {

  const [isSignedIn, setSignedIn] = useState(true);

  return (
    <NavigationContainer>
      { isSignedIn  ? (
        <AuthStack.Navigator>
        <AuthStack.Screen name="login" component={LoginScreen} options={{ headerShown: false }}/>
        <AuthStack.Screen name="signin" component={SignInScreen} options={{ headerShown: false }} />
      </AuthStack.Navigator>
      ): (
        <TabSatck.Navigator>
          <TabSatck.Screen name="home" component={HomeScreen} />
        </TabSatck.Navigator>
      )}
      </NavigationContainer>
  )
}

export default App;

