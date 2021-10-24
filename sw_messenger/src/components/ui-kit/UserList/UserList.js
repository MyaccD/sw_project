import React from 'react';
import {Text, View, Image} from 'react-native';

import {styles} from './UserListStyle';

export const UserList = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.item.profilePhoto} />
      <View style={styles.text}>
        <Text style={styles.nameText}>{props.item.name}</Text>
        <Text style={styles.cityText}>{props.item.city} </Text>
      </View>
    </View>
  );
};
