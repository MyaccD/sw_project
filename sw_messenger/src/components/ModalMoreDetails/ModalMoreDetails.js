import React from 'react';
import Icon from '../../assets/Icon/Icon';
import {Text, TouchableOpacity, View, Modal, Pressable} from 'react-native';
import styles from './ModalMoreDetailsStyle';

export const MoreDetails = ({selfInf, social, visible, onCancel}) => {
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.backgroundContainer}>
        {<Pressable style={styles.press} onPress={onCancel} />}
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Подробнее</Text>
            <TouchableOpacity onPress={onCancel}>
              <Icon name={'backspace'} size={24} color="#8672BB" />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <Icon name={'chat'} size={24} color="#FFFFFF" />
            <Text style={styles.text}>{selfInf.status}</Text>
          </View>
          <View style={styles.item}>
            <Icon name={'cake'} size={24} color="#FFFFFF" />
            <Text style={styles.text}>{selfInf.birthDay}</Text>
          </View>
          <View style={styles.item}>
            <Icon name={'location-marker'} size={24} color="#FFFFFF" />
            <Text style={styles.text}>{selfInf.city}</Text>
          </View>
          <View style={styles.item}>
            <Icon name={'briefcase'} size={24} color="#FFFFFF" />
            <Text style={styles.text}>{selfInf.studies}</Text>
          </View>

          <View style={styles.separator} />

          <View style={styles.headerContainer}>
            <Text style={styles.title}>Контакты</Text>
          </View>
          <View style={styles.item}>
            <Icon name={'Arrow'} size={24} color="#FFFFFF" />
            <Text style={styles.text}>{social.arrow}</Text>
          </View>
          <View style={styles.item}>
            <Icon name={'twitter'} size={24} color="#FFFFFF" />
            <Text style={styles.text}>{social.twitter}</Text>
          </View>
          <View style={styles.item}>
            <Icon name={'instagram'} size={24} color="#FFFFFF" />
            <Text style={styles.text}>{social.instagram}</Text>
          </View>
          <View style={styles.item}>
            <Icon name={'facebook'} size={24} color="#FFFFFF" />
            <Text style={styles.text}>{social.facebook}</Text>
          </View>
          <View style={styles.item}>
            <Icon name={'telegram'} size={24} color="#FFFFFF" />
            <Text style={styles.text}>{social.telegram}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};
