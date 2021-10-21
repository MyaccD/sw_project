import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from '../screens/SettingsScreen';
import Profile from '../screens/ProfileScreen/index';
import Friends from '../screens/FriendsScreen';
import Search from '../screens/SearchScreen';
import Home from '../screens/HomeScreen';

const MainStackNavigator = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <MainStackNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <MainStackNavigator.Screen name="Home" component={Home} />
      <MainStackNavigator.Screen name="Profile" component={Profile} />
      <MainStackNavigator.Screen name="Friends" component={Friends} />
      <MainStackNavigator.Screen name="Search" component={Search} />
      <MainStackNavigator.Screen name="Settings" component={Settings} />
    </MainStackNavigator.Navigator>
  );
};
