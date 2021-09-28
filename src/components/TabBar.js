import React from 'react';
import { StyleSheet, Image, Text, View,TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 


const TabSatck = createBottomTabNavigator();

const TabBar = () => {
    return (
        <TabSatck.Navigator
          screenOptions={{
            headerStyle: {
                backgroundColor: 'black',
                borderStyle: 'solid',
                borderWidth: 1,
                borderBottomColor: 'orange'
            },
            headerTintColor: 'orange',
            headerRight: ()=> {
              return (
                <TouchableOpacity style={styles.profile}>
                    <Ionicons name="person" size={30} color="black" />
                </TouchableOpacity>
              );
            },
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: 'orange',
              position: 'absolute',
              bottom: 30,
              right: 20,
              left: 20,
              elevation: 0,
              height: 80,
              justifyContent: 'space-between',
              borderRadius: 15,
              ... styles.shadow,
            }
          }}
        >
          <TabSatck.Screen name="Lifts" component={HomeScreen} options={{
                tabBarIcon: () => {
                  return(
                          <View style={styles.tabBarIcon}>
                                <MaterialCommunityIcons name="weight-lifter" size={40} color='black' />
                          </View>
                   );
                   }
              }
          } />
          <TabSatck.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: () => {
             return(
                  <View style={styles.tabBarIcon}>  
                      <FontAwesome name="home" size={40} color="black" />
                  </View>
            );
            }
          }} />
          <TabSatck.Screen name="Routine" component={HomeScreen} 
          options={
            {
              tabBarIcon: () => {
                  return(
                    <View style={styles.tabBarIcon}>
                        <FontAwesome name="th-list" size={30} color="black" />
                    </View>
                  )}
            }
        }/>
         <TabSatck.Screen name="Settings" component={HomeScreen} 
          options={
            {
              tabBarIcon: () => {
                  return(
                      <View style={styles.tabBarIcon}>
                        <Ionicons name="settings" size={30} color="black" />
                      </View>
                  )}
            }
        }/>
        </TabSatck.Navigator>
    );
};

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
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        borderRadius: 60,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    profile: {
      justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        borderRadius: 60,
        backgroundColor: 'orange',
        marginRight: 15,
        marginBottom: 10
    }
});

export default TabBar;