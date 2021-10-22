import React, {useState} from 'react';
import Icon from '../../../assets/Icon/Icon';
import {SafeAreaView, View, StatusBar, TouchableOpacity} from 'react-native';
import styles from './HeaderStyle';
import {ModalMenu} from '../../ModalMenu/ModalMenu';
import {useNavigation} from '@react-navigation/native';

export const Header = () => {
  const [modalMenu, setModalMenu] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <StatusBar backgroundColor="#2B2146" />

        <View style={styles.iconArrow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="Arrow_Left" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <SafeAreaView style={styles.button}>
          <TouchableOpacity onPress={() => setModalMenu(true)}>
            <Icon
              style={styles.iconDots}
              name="Dots_Vertical"
              size={24}
              color="#FFFFFF"
            />
          </TouchableOpacity>
          <ModalMenu visible={modalMenu} onCancel={() => setModalMenu(false)} />
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
};
