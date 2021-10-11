import React from 'react';
import Icon from './Icon';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Modal,
  Dimensions,
  FlatList,
} from 'react-native';


// const deviceHeight = Dimensions.get("window").height
export class Profile_more_details extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    show = () => {
        this.setState({show: true})
    }

    close = () => {
        this.setState({show: false})
    }

    renderOutsideTouchable(onTouch) {
        const view = <View style={{flex: 1, width: '100%'}}/>
        if (!onTouch) return view

        return (
            <TouchableWithoutFeedback onPress={onTouch} style={{flex: 1, width: '100%'}}>
                {view}
            </TouchableWithoutFeedback>
        )
    }

    renderTitle = () => {
        const {title} = this.props
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                }}>
                <Text style={{
                    fontFamily: 'HKGrotesk-Bold',
                    color: '#ECEBED',
                    fontSize: 16,
                    marginTop: 33,
                }}>
                    {title}
                </Text>
                <View style={styles.backspace}>
                    <Icon name="backspace" size={24} color="#8672BB"/>
                </View>
            </View> 
        )
    }

    renderTitle2 = () => {
        const {title2} = this.props
        return (
            <View style={{
                flexDirection: 'row',
                marginLeft: 26,
                }}>
                <Text style={{
                    fontFamily: 'HKGrotesk-Bold',
                    color: '#ECEBED',
                    fontSize: 16,
                    marginTop: 20,
                }}>
                    {title2}
                </Text>
            </View> 
        )
    }

    renderContent = () => {
        const {data} = this.props
        return (
            <View style={{
                marginTop: 30,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
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
        )
    }

    

    renderItem = ({item}) => {
        return (
            <View style={{width: 339, marginTop: 11, flexDirection: 'row', height: 36, flex: 1, alignItems: 'flex-start'}}>
                <Icon name={item.icon} size={24} color="#FFFFFF"/>
                <Text style={{marginLeft: 12, fontFamily: 'HKGrotesk-Medium', fontSize: 14, color: '#C3B8E0'}}>{item.name}</Text>
            </View> 
        )
    }

    render() {
        let {show} = this.state
        const {onTouchOutside, title} = this.props


        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: '#000000AA',
                    justifyContent: 'flex-end'}}
                    >
                        {this.renderOutsideTouchable(onTouchOutside)}
                        <View style={{
                            backgroundColor: '#2B2146',
                            width: '100%',                           
                            borderTopRightRadius: 15,
                            borderTopLeftRadius: 15,
                         
                            // maxHeight: deviceHeight / 2
                        }}>

                        {this.renderTitle()}
                        {this.renderContent()}
                        <View
                            style={{
                            backgroundColor: '#3B2D5F',
                            height: 1,
                            }}
                        />                                                   
                        </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    backspace: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 37,
        marginLeft: 236,
    }
  });