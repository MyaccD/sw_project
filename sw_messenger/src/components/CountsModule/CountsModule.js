import React from 'react';
import {Text, View} from 'react-native';

import {Button} from '../ui-kit/Button/Button';
import styles from './CountsModuleStyle';

export const CountsModule = () => {
  return (
    <View style={styles.countsModule}>
      <View style={styles.followers}>
        <Text style={styles.numberFollowers}>2,467</Text>
        <Text style={styles.textFollower}>Followers</Text>
      </View>
      <View style={styles.following}>
        <Text style={styles.numberFollowing}>1,589</Text>
        <Text style={styles.textFollowing}>Following</Text>
      </View>
      <Button />
    </View>
  );
};
