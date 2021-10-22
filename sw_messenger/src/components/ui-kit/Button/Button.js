import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import styles from './ButtonStyle';

export const Button = ({onClick}) => {
  return (
    <SafeAreaView style={styles.button}>
      <TouchableOpacity onPress={onClick}>
        <Text style={styles.textBtn}>Подробнее</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
