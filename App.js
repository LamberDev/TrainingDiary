import React, { useState } from 'react';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignInScreen from './src/screens/SignInScreen';
import HomeScreen from './src/screens/HomeScreen';
import { StyleSheet, Image, Text, View } from 'react-native';


const AuthStack = createStackNavigator();
const TabSatck = createBottomTabNavigator();



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
        <TabSatck.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: 'black',
              position: 'absolute',
              bottom: 30,
              right: 20,
              left: 20,
              elevation: 0,
              height: 80,
              borderRadius: 20,
              ...styles.shadow
            }
          }}
        >
          <TabSatck.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({focused}) => {
              <View style={{}}>
                <Image source={require('/Users/lamber/Desktop/TrainingDiary/src/img/tabBarIcon/home.png')} 
                  resizeMode='contain'
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? 'white' : 'red'
                  }}/>
                <Text>HOME</Text>
              </View>
            }
          }} />
          <TabSatck.Screen name="Lifts" component={HomeScreen} />
          <TabSatck.Screen name="Routine" component={HomeScreen} />
          <TabSatck.Screen name="Settings" component={HomeScreen} />
        </TabSatck.Navigator>
      )}
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  tabBarIcon: {
    height: 25,
    width: 25,
    tintColor: focused ? 'white' : 'red'
  }
})

export default App;

