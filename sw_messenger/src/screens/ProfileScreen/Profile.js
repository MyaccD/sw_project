import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import {Header} from '../../components/ui-kit/Header/Header';
import {CountsModule} from '../../components/CountsModule/CountsModule';
import {PhotoGrid} from '../../components/PhotoGrid/PhotoGrid';
import styles from './ProfileStyle';

export const Profile = props => {
  const data = props.data;

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.avatar}>
        <Image source={data.selfInf.profilePhoto} />
      </View>
      <View style={styles.name}>
        <Text style={styles.textName}>{data.selfInf.name}</Text>
        <Text style={styles.textSurname}>{data.selfInf.link}</Text>
      </View>
      <View style={styles.locate}>
        <Text style={styles.textCountry}>
          {data.selfInf.country}, {data.selfInf.city}
        </Text>
        <Text style={styles.textWork}>
          Место работы: {data.selfInf.workplace}
        </Text>
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

export default Profile;
