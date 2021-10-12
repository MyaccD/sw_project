import React from 'react';

import {SafeAreaView, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './ButtonStyle';
import {ModalMoreDetails} from '../../ModalMoreDetails/ModalMoreDetails';

const popuplist = [
  {
    id: 1,
    icon: 'chat',
    name: 'They never ask people to do things they wouldn’t do themselves.',
  },
  {
    id: 2,
    icon: 'cake',
    name: 'День рождения: 08 октября 1992',
  },
  {
    id: 3,
    icon: 'location-marker',
    name: 'Город: Санкт-Петербург',
  },
  {
    id: 4,
    icon: 'briefcase',
    name: 'ВГУЮ в г. Санкт-Петербург',
  },
  {
    id: 5,
    icon: 'Arrow',
    name: 'http://t.me/durov',
  },
  {
    id: 6,
    icon: 'twitter',
    name: 'Durov',
  },
  {
    id: 7,
    icon: 'instagram',
    name: 'Pavel Durov',
  },
  {
    id: 8,
    icon: 'facebook',
    name: 'durov',
  },
  {
    id: 9,
    icon: 'telegram',
    name: 'durov',
  },
];

export const Button = () => {
  let popupRef = React.createRef();

  const onShowPopup = () => {
    popupRef.show();
  };

  const onClosePopup = () => {
    popupRef.close();
  };
  return (
    <SafeAreaView style={styles.button}>
      <TouchableWithoutFeedback onPress={onShowPopup}>
        <Text style={styles.textBtn}>Подробнее</Text>
      </TouchableWithoutFeedback>
      <ModalMoreDetails
        title="Подробнее"
        title2="Контакты"
        ref={target => (popupRef = target)}
        onTouchOutside={onClosePopup}
        data={popuplist}
      />
    </SafeAreaView>
  );
};
