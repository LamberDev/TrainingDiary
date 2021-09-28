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
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: 'orange',
              position: 'absolute',
              bottom: 30,
              right: 20,
              left: 20,
              elevation: 0,
              height: 70,
              justifyContent: 'space-between',
              borderRadius: 15,
              ... styles.shadow
            }
          }}
        >
          <TabSatck.Screen name="Lifts" component={HomeScreen} options={
              {
                tabBarIcon: () => {
                    return(
                   <View style={styles.tabBarIcon}>
                      <MaterialCommunityIcons name="weight-lifter" size={30} color='black' />
                   </View>);
                   }
              }
          } />
          <TabSatck.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: () => {
             return(
            <View style={styles.tabBarIcon}>
                <FontAwesome name="home" size={30} color="black" />
            </View>);
            }
          }} />
          <TabSatck.Screen name="Routine" component={HomeScreen} 
          options={
            {
              tabBarIcon: () => {
                  return(
                 <View style={styles.tabBarIcon}>
                    <TouchableOpacity>
                      <FontAwesome name="th-list" size={20} color="black" />
                    </TouchableOpacity>
                 </View>);
                 }
            }
        }/>
         <TabSatck.Screen name="Settings" component={HomeScreen} 
          options={
            {
              tabBarIcon: () => {
                  return(
                 <View style={styles.tabBarIcon}>
                      <Ionicons name="settings" size={20} color="black" />
                 </View>);
                 }
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
        height: 40,
        width: 40,
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
    }
});

export default TabBar;