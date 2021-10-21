import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StackNavigator} from './Navigator';

const AppNavigator = props => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
