import React, {useState} from 'react';
import {SafeAreaView, View, StatusBar, TouchableOpacity} from 'react-native';
import Icon from '../../assets/Icon/Icon';
import styles from './HomeStyle';
import Menu from '../../components/HomeMenu';
export const Home = props => {
  const [menu, setMenu] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <StatusBar backgroundColor="#2B2146" />

        <View>
          <TouchableOpacity onPress={() => setMenu(true)}>
            <Icon name="menu" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.iconRigth}>
          <TouchableOpacity>
            <Icon name="search" size={24} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name="Alert" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <Menu
        visible={menu}
        onCancel={() => setMenu(false)}
        navigation={props.navigation}
        selfInf={props.selfInf}
      />
    </SafeAreaView>
  );
};
