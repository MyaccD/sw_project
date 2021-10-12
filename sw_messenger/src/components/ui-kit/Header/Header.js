import React from 'react';
import Icon from '../../../assets/Icon/Icon';
import {
  SafeAreaView,
  View,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';

import styles from './HeaderStyle';
import {ModalMenu} from '../../ModalMenu/ModalMenu';

const popuplist = [
  {
    id: 1,
    icon: 'share',
    name: 'Поделиться',
  },
  {
    id: 2,
    icon: 'document-duplicate',
    name: 'Скопировать ссылку',
  },
];

export const Header = () => {
  let popupRef = React.createRef();

  const onShowPopup = () => {
    popupRef.show();
  };

  const onClosePopup = () => {
    popupRef.close();
  };
  return (
    <View style={styles.header}>
      <StatusBar backgroundColor="#2B2146" />
      <View style={styles.iconArrow}>
        <Icon name="Arrow_Left" size={24} color="#FFFFFF" />
      </View>

      <SafeAreaView style={styles.button}>
        <TouchableWithoutFeedback onPress={onShowPopup}>
          <Icon
            style={styles.iconDots}
            name="Dots_Vertical"
            size={24}
            color="#FFFFFF"
          />
        </TouchableWithoutFeedback>
        <ModalMenu
          ref={target => (popupRef = target)}
          onTouchOutside={onClosePopup}
          data={popuplist}
        />
      </SafeAreaView>
    </View>
  );
};
