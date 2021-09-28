import React, { useState } from 'react';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './src/screens/SignInScreen';
import { StyleSheet} from 'react-native';
import TabBar from './src/components/TabBar';


const AuthStack = createStackNavigator();



const App = () => {

  const [isSignedIn, setSignedIn] = useState(false);

  return (
    <NavigationContainer>
      { isSignedIn  ? (
        <AuthStack.Navigator>
            <AuthStack.Screen name="login" component={LoginScreen} options={{ headerShown: false }}/>
            <AuthStack.Screen name="signin" component={SignInScreen} options={{ headerShown: false }} />
      </AuthStack.Navigator>
      ): (
        <TabBar></TabBar>
      )}
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  
});

export default App;

