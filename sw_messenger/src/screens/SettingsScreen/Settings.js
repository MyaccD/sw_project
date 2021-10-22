import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './SettingsStyle';
import Icon from '../../assets/Icon/Icon';
import {useNavigation} from '@react-navigation/native';

export const Settings = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0}
          onPress={() => navigation.goBack()}>
          <Icon name={'Arrow_Left'} color="#FFFFFF" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Настройки</Text>
        <View style={styles.backButton} />
      </View>

      <TouchableOpacity style={styles.item}>
        <Icon name="color-swatch" size={24} color="#FFFFFF" />
        <Text style={styles.text}>Внешний вид</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Icon name="information-circle" size={24} color="#FFFFFF" />
        <Text style={styles.text}>О приложении</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Icon name="logout" size={24} color="#8672BB" />
        <Text style={styles.textOut}>Выйти</Text>
      </TouchableOpacity>
    </View>
  );
};
