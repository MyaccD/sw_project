import React from 'react';
import {
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import Icon from '../../assets/Icon/Icon';
import {styles} from './MenuStyle';

export const Menu = ({visible, onCancel, navigation, selfInf}) => {
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={styles.centralView} onPress={onCancel}>
        <View style={styles.container}>
          <View style={styles.personalInformation}>
            <Image
              style={styles.profileImage}
              source={require('../../../src/assets/images/Avatar.png')}
            />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{selfInf.name}</Text>
              <Text style={styles.link}>{selfInf.link}</Text>
            </View>
          </View>
          <View style={styles.menuList}>
            <View style={styles.item}>
              <TouchableOpacity
                style={styles.touchBtn}
                onPress={() => {
                  onCancel();
                  navigation.navigate('Profile');
                }}>
                <Icon name="Profile" size={24} color="#FFFFFF" />
                <Text style={styles.text}>Мой профиль</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity style={styles.touchBtn}>
                <Icon name="group" size={24} color="#FFFFFF" />
                <Text style={styles.text}>Друзья</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity style={styles.touchBtn}>
                <Icon name="search" size={24} color="#FFFFFF" />
                <Text style={styles.text}>Поиск</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity style={styles.touchBtn}>
                <Icon name="settings-cog" size={24} color="#FFFFFF" />
                <Text style={styles.text}>Настройки</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Pressable style={styles.press} onPress={onCancel} />
      </View>
    </Modal>
  );
};
