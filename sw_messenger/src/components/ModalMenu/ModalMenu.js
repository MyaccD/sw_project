import React from 'react';
import Icon from '../../assets/Icon/Icon';
import styles from './ModalMenuStyle';
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  FlatList,
  Button,
} from 'react-native';

export class ModalMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  show = () => {
    this.setState({show: true});
  };

  close = () => {
    this.setState({show: false});
  };

  renderOutsideTouchable(onTouch) {
    const view = <View style={{flex: 1, width: '100%'}} />;
    if (!onTouch) return view;

    return (
      <TouchableOpacity onPress={onTouch} style={{flex: 1, width: '100%'}}>
        {view}
      </TouchableOpacity>
    );
  }

  renderContent = () => {
    const {data} = this.props;
    return (
      <View style={styles.card}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={this.renderItem}
          extraData={data}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.renderSeparator}
          contentContainerStyle={{
            paddingBottom: 6,
          }}
        />
      </View>
    );
  };

  renderItem = ({item}) => {
    return (
      <View style={styles.string}>
        <Icon name={item.icon} size={18} color="#FFFFFF" />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    );
  };

  renderSeparator = () => <View style={styles.separator} />;

  render() {
    let {show} = this.state;
    const {onTouchOutside, title} = this.props;

    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={show}
        onRequestClose={this.close}>
        <View style={styles.backgroundOutside}>
          {this.renderOutsideTouchable(onTouchOutside)}
          <View style={styles.backgroundCard}>{this.renderContent()}</View>
        </View>

        <View style={styles.btn}>
          <Button title="Отмена" color="#2B2146" />
        </View>
      </Modal>
    );
  }
}
