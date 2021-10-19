import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, View, StatusBar, TouchableOpacity} from 'react-native';
import Icon from '../../assets/Icon/Icon';
import styles from './HomeStyle';

export const Home = () => {
  const navigation = useNavigation();

  const handleNavigateToScreen = () => {
    navigation.navigate('Profile');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <StatusBar backgroundColor="#2B2146" />

        <View>
          <TouchableOpacity onPress={() => handleNavigateToScreen()}>
            <Icon name="menu" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.iconRigth}>
          <TouchableOpacity>
            <Icon name="search" size={24} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name="Alert" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
