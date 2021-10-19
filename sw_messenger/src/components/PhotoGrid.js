import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

export const PhotoGrid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image
          style={styles.tinyPhoto}
          source={require('../assets/images/Photo1.jpg')}
        />
        <Image
          style={styles.tinyPhoto}
          source={require('../assets/images/Photo4.jpg')}
        />
        <Image
          style={styles.tinyPhoto}
          source={require('../assets/images/Photo7.jpg')}
        />
      </View>

      <View style={styles.container2}>
        <Image
          style={styles.tinyPhoto}
          source={require('../assets/images/Photo2.jpg')}
        />
        <Image
          style={styles.tinyPhoto}
          source={require('../assets/images/Photo5.jpg')}
        />
        <Image
          style={styles.tinyPhoto}
          source={require('../assets/images/Photo8.jpg')}
        />
      </View>

      <View style={styles.container3}>
        <Image
          style={styles.tinyPhoto}
          source={require('../assets/images/Photo3.jpg')}
        />
        <Image
          style={styles.tinyPhoto}
          source={require('../assets/images/Photo6.jpg')}
        />
        <Image
          style={styles.tinyPhoto}
          source={require('../assets/images/Photo9.jpg')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  tinyPhoto: {
    marginLeft: 3,
    marginTop: 3,
    width: 113,
    height: 113,
  },
});
