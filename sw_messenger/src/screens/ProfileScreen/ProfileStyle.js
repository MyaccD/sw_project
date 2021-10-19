import {StyleSheet} from 'react-native';

const ProfileStyle = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#2B2146',
  },

  avatar: {
    justifyContent: 'center',
    position: 'absolute',
    flexDirection: 'row',
    marginTop: 22,
    marginLeft: '31%',
  },

  name: {
    alignItems: 'center',
    marginTop: 89,
  },

  textName: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 16,
    color: '#ECEBED',
  },

  textSurname: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 12,
    color: '#8672BB',
  },

  locate: {
    marginTop: 29,
    alignItems: 'center',
  },

  textCountry: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 14,
    color: '#8672BB',
  },

  textWork: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 14,
    color: '#ECEBED',
  },

  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#3B2D5F',
    width: '90%',
    marginTop: 24,
    marginLeft: 20,
  },

  labelPhoto: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textPhoto: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 14,
    color: '#FFFFFF',
  },

  countPhoto: {
    fontFamily: 'HKGrotesk-Medium',
    marginLeft: 6,
    fontSize: 14,
    color: '#8672BB',
  },
});

export default ProfileStyle;
