import React from 'react';
import Icon from './Icon';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';

import {Profile_menu} from './Profile_menu'


const popuplist = [
    {
        id: 1,
        icon: 'share',
        name: 'Поделиться',
    },
    {
        id: 2,
        icon: 'document-duplicate',
        name: 'Скопировать ссылку'
    },
]

export const Header = (props) => {
    let popupRef = React.createRef()

    const onShowPopup = () => {
        popupRef.show()
    }

    const onClosePopup = () => {
        popupRef.close()
    }
    return (
        
        <View style={styles.header}>
            <StatusBar backgroundColor="#2B2146"/>
            <View style={styles.icon_arrow}>
                <Icon name="Arrow_Left" size={24} color="#FFFFFF"/>
            </View>

            <SafeAreaView style={styles.button}>
                <TouchableWithoutFeedback onPress={onShowPopup}>
                    <Icon style={styles.icon_dots} name="Dots_Vertical" size={24} color="#FFFFFF"/>
                </TouchableWithoutFeedback>
                <Profile_menu
                    ref={(target) => popupRef = target}
                    onTouchOutside={onClosePopup}
                    data={popuplist}
                />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 46,
        backgroundColor: '#2B2146',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: "row",
    },

    icon_arrow: {
        marginLeft: 16,
    },

    icon_dots: {
        marginRight: 16,
        transform: [{ rotate: "90deg" }],
    },
})