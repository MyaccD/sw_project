import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './FriendsStyle';
import Icon from '../../assets/Icon/Icon';
import {useNavigation} from '@react-navigation/native';
import UserList from '../../components/ui-kit/UserList';

export const Friends = props => {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item}) => {
    return <UserList item={item} onPress={() => setSelectedId(item.id)} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0}
          onPress={() => navigation.goBack()}>
          <Icon name={'Arrow_Left'} color="#FFFFFF" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Друзья</Text>
        <View style={styles.backButton} />
      </View>

      <FlatList
        data={props.friends}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
