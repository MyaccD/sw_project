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
  Button
} from 'react-native';


export class Profile_menu extends React.Component {
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

    renderContent = () => {
        const {data} = this.props
        return (
            <View style={{
                
                alignItems: 'center',
                justifyContent: 'center',
            }}>
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
        )
    }

    
    renderItem = ({item}) => {
        return (
            <View style={{width: 339,  flexDirection: 'row', marginTop: 13, marginBottom: 14, height: 24, flex: 1, alignItems: 'center'}}>
                <Icon name={item.icon} size={18} color="#FFFFFF"/>
                <Text style={{marginLeft: 12, fontFamily: 'HKGrotesk-SemiBold', fontSize: 16, color: '#FFFFFF'}}>{item.name}</Text>
            </View> 
        )
    }

    renderSeparator = () => (
        <View 
            style={{
                opacity: 1,
                backgroundColor: '#3B2D5F',
                height: 1
            }}
        />

    )

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
                            // maxHeight: deviceHeight / 2
                        }}>

                        {this.renderContent()}
                        <View
                            style={{
                            backgroundColor: '#3B2D5F',
                            height: 1,
                            }}
                        />                                                   
                        </View>
                </View>

                <View style={{marginTop: 10}}>
                    <Button
                        title="Отмена"
                        color="#2B2146"
                        
                    />
                </View>
            </Modal>
        )
    }
}

