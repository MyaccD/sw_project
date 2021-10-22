import React, {useState} from 'react';
import {View, Image, FlatList, TouchableOpacity} from 'react-native';
import {styles} from './PhotoGridStyle';

const Item = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress} style={{}}>
    <Image style={styles.title} source={item.source} />
  </TouchableOpacity>
);

export const PhotoGrid = ({data}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapperStyle}
      />
    </View>
  );
};
