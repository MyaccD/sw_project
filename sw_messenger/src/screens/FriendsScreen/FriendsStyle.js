import {StyleSheet} from 'react-native';

const FriendsStyle = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 17,
        marginBottom: 4,
      },
      backButton: {
        width: 22,
      },
      headerText: {
        fontFamily: 'HKGrotesk-Bold',
        fontSize: 16,
        color: '#FFFFFF',
      },
      container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#2B2146',
      },
      
});

export default FriendsStyle;
