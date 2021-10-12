import React from 'react';
import {View, Image} from 'react-native';
import styles from './PhotoGridStyle';

export const PhotoGrid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerOne}>
        <Image
          style={styles.tinyPhoto}
          source={require('../../assets/images/Photo1.jpg')}
        />
        <Image
          style={styles.tinyPhoto}
          source={require('../../assets/images/Photo4.jpg')}
        />
        <Image
          style={styles.tinyPhoto}
          source={require('../../assets/images/Photo7.jpg')}
        />
      </View>

      <View style={styles.containerTwo}>
        <Image
          style={styles.tinyPhoto}
          source={require('../../assets/images/Photo2.jpg')}
        />
        <Image
          style={styles.tinyPhoto}
          source={require('../../assets/images/Photo5.jpg')}
        />
        <Image
          style={styles.tinyPhoto}
          source={require('../../assets/images/Photo8.jpg')}
        />
      </View>

      <View style={styles.containerThree}>
        <Image
          style={styles.tinyPhoto}
          source={require('../../assets/images/Photo3.jpg')}
        />
        <Image
          style={styles.tinyPhoto}
          source={require('../../assets/images/Photo6.jpg')}
        />
        <Image
          style={styles.tinyPhoto}
          source={require('../../assets/images/Photo9.jpg')}
        />
      </View>
    </View>
  );
};
