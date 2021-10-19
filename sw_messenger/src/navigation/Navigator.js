import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/HomeScreen/Home';
import {Profile} from '../screens/ProfileScreen/Profile';
import {Friends} from '../screens/FriendsScreen/Friends';
import {Search} from '../screens/SearchScreen/Search';
import {Settings} from '../screens/SettingsScreen/Settings';

export const Navigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="App">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Friends" component={Friends} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};
