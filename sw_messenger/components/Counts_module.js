import React from 'react';
import Icon from './Icon';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { Profile_more_details } from './Profile_more_details';

const popuplist = [
    {
        id: 1,
        icon: 'chat',
        name: 'They never ask people to do things they wouldn’t do themselves.',
    },
    {
        id: 2,
        icon: 'cake',
        name: 'День рождения: 08 октября 1992'
    },
    {
        id: 3,
        icon: 'location-marker',
        name: 'Город: Санкт-Петербург'
    },
    {
        id: 4,
        icon: 'briefcase',
        name: 'ВГУЮ в г. Санкт-Петербург'
    },
    {
        id: 5,
        icon: 'Arrow',
        name: 'http://t.me/durov',
    },
    {
        id: 6,
        icon: 'twitter',
        name: 'Durov'
    },
    {
        id: 7,
        icon: 'instagram',
        name: 'Pavel Durov'
    },
    {
        id: 8,
        icon: 'facebook',
        name: 'durov'
    },
    {
        id: 9,
        icon: 'telegram',
        name: 'durov'
    },
]

export const Counts_module = (props) => {
    let popupRef = React.createRef()

    const onShowPopup = () => {
        popupRef.show()
    }

    const onClosePopup = () => {
        popupRef.close()
    }

    return (
        
        <View style={styles.counts_module}>
            <View style={styles.followers}>
                <Text style={{fontFamily: 'HKGrotesk-Bold', fontSize: 14, color: '#FFFFFF'}}>
                2,467 
                </Text>
                <Text style={{fontFamily: 'HKGrotesk-Bold', fontSize: 14, color: '#8672BB'}}>
                Followers
                </Text>
            </View>
            <View style={styles.following}>
                <Text style={{fontFamily: 'HKGrotesk-Bold', fontSize: 14, color: '#FFFFFF'}}>
                1,589 
                </Text>
                <Text style={{fontFamily: 'HKGrotesk-Bold', fontSize: 14, color: '#8672BB'}}>
                Following
                </Text>
            </View>

            <SafeAreaView style={styles.button}>
                <TouchableWithoutFeedback onPress={onShowPopup}>
                    <Text style={styles.text_btn}>Подробнее</Text>
                </TouchableWithoutFeedback>
                <Profile_more_details
                    title="Подробнее"
                    title2="Контакты"
                    ref={(target) => popupRef = target}
                    onTouchOutside={onClosePopup}
                    data={popuplist}
                />
            </SafeAreaView>
        </View>  
    )
}


const styles = StyleSheet.create({

counts_module:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
},

followers: {
    flexDirection: 'column',
    marginTop: 24,    
},

following:{
    flexDirection: 'column',
    marginLeft: 30,
    marginTop: 24,  
},

button: {
    width: 145,
    height: 36,
    marginTop: 24,
    marginLeft: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#3B2D5F',
},

text_btn: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 6,
}

});