import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,

} from 'react-native';
import {Header} from './Header'
import {Counts_module} from './Counts_module'
import {Photo_grid} from './Photo_grid'

export const Profile = (props) => {
    return (
        
      <View style={styles.container}>
        <Header />
            <View style={styles.avatar}>
              <Image source={require('../assets/images/Avatar.png')}/>
            </View>
            <View style={styles.text_name}>
              <Text style={{fontFamily: 'HKGrotesk-Bold', fontSize: 16, color: '#ECEBED'}}>
                Kat Williams
              </Text>
              <Text style={{fontFamily: 'HKGrotesk-Medium', fontSize: 12, color: '#8672BB'}}>
                @Williams
              </Text>
            </View>
            <View style={styles.text_locate}>
              <Text style={{fontFamily: 'HKGrotesk-Medium', fontSize: 14, color: '#8672BB'}}>
                Россия, Санкт-Петербург
              </Text>
              <Text style={{fontFamily: 'HKGrotesk-Medium', fontSize: 14, color: '#ECEBED'}}>
                Место работы: Artist by Passion!
              </Text>
            </View>
            <Counts_module/>

            <View style={styles.divider}></View>

            <View style={styles.text_photo}>
              <Text style={{fontFamily: 'HKGrotesk-Medium', fontSize: 14, color: '#FFFFFF'}}>
                Фотографии
              </Text>
              <Text style={{fontFamily: 'HKGrotesk-Medium', marginLeft: 6, fontSize: 14, color: '#8672BB'}}>
                245
              </Text>
            </View>

            <Photo_grid/>          
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: '#2B2146',
    },
  
    avatar: {
      justifyContent: 'center',
      position: 'absolute',
      flexDirection: 'row',
      marginTop: 22,
      marginLeft: '31%'
    },
  
    text_name: {
      alignItems: 'center',
      marginTop: 89,
    },
  
    text_locate: {
      marginTop: 29,
      alignItems: 'center',
    },

    divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#3B2D5F',
        width: '90%',
        marginTop: 24,
        marginLeft: 20,
    },

    text_photo: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
  });
  
  