import React from 'react';
import Icon from '../../assets/Icon/Icon';
import {Text, TouchableOpacity, View, Modal, FlatList} from 'react-native';
import styles from './ModalMoreDetailsStyle';

export class ModalMoreDetails extends React.Component {
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

  renderTitle = () => {
    const {title} = this.props;
    return (
      <View style={styles.title}>
        <Text style={styles.textTitle}>{title}</Text>
        <View style={styles.backspace}>
          <Icon name="backspace" size={24} color="#8672BB" />
        </View>
      </View>
    );
  };

  renderContent = () => {
    const {data} = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={this.renderItem}
          extraData={data}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{
            paddingBottom: 12,
          }}
        />
      </View>
    );
  };

  renderItem = ({item}) => {
    return (
      <View style={styles.labelText}>
        <Icon name={item.icon} size={24} color="#FFFFFF" />
        <Text style={styles.strings}>{item.name}</Text>
      </View>
    );
  };

  render() {
    let {show} = this.state;
    const {onTouchOutside, title} = this.props;

    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={show}
        onRequestClose={this.close}>
        <View style={styles.background}>
          {this.renderOutsideTouchable(onTouchOutside)}
          <View style={styles.modalWindow}>
            {this.renderTitle()}
            {this.renderContent()}
          </View>
        </View>
      </Modal>
    );
  }
}
