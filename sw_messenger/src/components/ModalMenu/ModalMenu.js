import React from 'react';
import Icon from '../../assets/Icon/Icon';
import styles from './ModalMenuStyle';
import {Text, TouchableOpacity, View, Modal, Pressable} from 'react-native';

export const ModalMenu = ({visible, onCancel}) => {
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={styles.wrapper}>
        {<Pressable style={styles.press} onPress={onCancel} />}
        <View style={styles.container}>
          <View style={styles.backgroundCard}>
            <View style={styles.string}>
              <Icon name="share" size={24} color="#FFFFFF" />
              <Text style={styles.text}>Поделиться</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.string}>
              <Icon name="document-duplicate" size={24} color="#FFFFFF" />
              <Text style={styles.text}>Скопировать ссылку</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.btn} onPress={onCancel}>
            <Text style={styles.btnText}>Отмена</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
