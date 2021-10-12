import React from 'react';
import {Text, View, Image} from 'react-native';
import {Header} from '../components/ui-kit/Header/Header';
import {CountsModule} from '../components/CountsModule/CountsModule';
import {PhotoGrid} from '../components/PhotoGrid/PhotoGrid';
import styles from './ProfileStyle';

export const Profile = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.avatar}>
        <Image source={require('../assets/images/Avatar.png')} />
      </View>
      <View style={styles.name}>
        <Text style={styles.textName}>Kat Williams</Text>
        <Text style={styles.textSurname}>@Williams</Text>
      </View>
      <View style={styles.locate}>
        <Text style={styles.textCountry}>Россия, Санкт-Петербург</Text>
        <Text style={styles.textWork}>Место работы: Artist by Passion!</Text>
      </View>
      <CountsModule />

      <View style={styles.divider}></View>

      <View style={styles.labelPhoto}>
        <Text style={styles.textPhoto}>Фотографии</Text>
        <Text style={styles.countPhoto}>245</Text>
      </View>

      <PhotoGrid />
    </View>
  );
};
