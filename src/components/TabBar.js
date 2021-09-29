import React from 'react';
import { StyleSheet, Image, Text, View,TouchableOpacity, PlatformColor, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { isIOS } from 'react-native-elements/dist/helpers';


const TabSatck = createBottomTabNavigator();

const TabBar = () => {
    return (
        <TabSatck.Navigator
          screenOptions={{
            headerStyle: {
                backgroundColor: '#BFBFBF',
                borderBottomColor: 'black',
                borderStyle: 'solid',
                borderWidth: 0.5,
                elevation: 5
            },
            headerTintColor: 'black',
            headerRight: ()=> {
              return (
                <TouchableOpacity style={styles.profile}>
                    <Ionicons name="person" size={30} color="black" />
                </TouchableOpacity>
              );
            },
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: '#F5F5F5',
              position: 'absolute',
              justifyContent: 'space-between',
              alignItems: 'center',
              bottom: 40,
              marginHorizontal: 20,
              height: Platform.OS === 'ios' ? 70:60,
              borderRadius: 10,
              shadowColor: 'black',
              shadowOpacity: 0.25,
              shadowOffset: {
                width: 0,
                height: 10
              },
              elevation: 5,
              paddingBottom: 0

            }
            
          }}
        >
          <TabSatck.Screen name="Lifts" component={HomeScreen} options={{
                tabBarIcon: ({focused}) => {
                  return(
                          <View style={styles.icons}>
                                <MaterialCommunityIcons name="weight-lifter" size={40} color={ focused ? 'orange':'black'} />
                          </View>
                   );
                  }
              }
          } />
          <TabSatck.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({focused}) => {
             return(
                  <View style={styles.icons}>  
                      <FontAwesome name="home" size={40} color={ focused ? 'orange':'black'} />
                  </View>
            );
            }
          }} />
          <TabSatck.Screen name="Routine" component={HomeScreen} 
          options={
            {
              tabBarIcon: ({focused}) => {
                  return(
                    <View style={styles.icons}>
                        <FontAwesome name="th-list" size={35} color={ focused ? 'orange':'black'} />
                    </View>
                  )}
            }
        }/>
         <TabSatck.Screen name="Settings" component={HomeScreen} 
          options={
            {
              tabBarIcon: ({focused}) => {
                  return(
                      <View style={styles.icons}>
                        <Ionicons name="settings" size={35} color={ focused ? 'orange':'black'} />
                      </View>
                  )}
            }
        }/>
        </TabSatck.Navigator>
    );
};

const styles = StyleSheet.create({
    icons: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    profile: {
      justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,
        borderRadius: 60,
        backgroundColor: '#F5F5F5',
        marginRight: 15,
        marginBottom: 10
    }
});

export default TabBar;