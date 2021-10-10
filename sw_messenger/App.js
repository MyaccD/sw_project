import React from 'react';
import Icon from './components/Icon';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export const App = () => {
  
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <Text style={{fontFamily: 'HKGrotesk-Bold', fontSize: 16}}>Hello world</Text>
      <Text style={{fontFamily: 'HKGrotesk-Medium', fontSize: 16}}>Hello world</Text>
      <Text style={{fontFamily: 'HKGrotesk-Regular', fontSize: 16}}>Hello world</Text>
      <Text style={{fontFamily: 'HKGrotesk-SemiBold', fontSize: 16}}>Hello world</Text>
      
      <View style={styles.body}>
        <Icon name="share" size={24} color="blue" />
        <Icon name="settings-cog" size={24} color="blue" />
        <Icon name="search" size={24} color="blue" />
        <Icon name="paper-airplane" size={24} color="blue" />
        <Icon name="menu" size={24} color="blue" />
        <Icon name="logout" size={24} color="blue" />
        <Icon name="location-marker" size={24} color="blue" />
        <Icon name="information-circle" size={24} color="blue" />
        <Icon name="group" size={24} color="blue" />
        <Icon name="document-duplicate" size={24} color="blue" />
        <Icon name="color-swatch" size={24} color="blue" />
        <Icon name="chevron-up" size={24} color="blue" />
        <Icon name="cake" size={24} color="blue" />
        <Icon name="briefcase" size={24} color="blue" />
        <Icon name="backspace" size={24} color="blue" />
        <Icon name="Profile" size={24} color="blue" />
        <Icon name="Like" size={24} color="blue" />
        <Icon name="Dots_Vertical" size={24} color="blue" />
        <Icon name="Bookmark" size={24} color="blue" />
        <Icon name="Arrow" size={24} color="blue" />
        <Icon name="Arrow_Left" size={24} color="blue" />
        <Icon name="Alert" size={24} color="blue" />
        <Icon name="instagram" size={24} color="blue" />
        <Icon name="twitter" size={24} color="blue" />
        <Icon name="telegram" size={24} color="blue" />
        <Icon name="facebook" size={24} color="blue" />
        <Icon name="chat" size={24} color="blue" />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
