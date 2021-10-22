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
  countsModule: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  numberFollowers: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 14,
    color: '#FFFFFF',
  },

  textFollower: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 14,
    color: '#8672BB',
  },

  followers: {
    flexDirection: 'column',
    marginTop: 24,
  },

  following: {
    flexDirection: 'column',
    marginLeft: 30,
    marginTop: 24,
  },

  numberFollowing: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 14,
    color: '#FFFFFF',
  },

  textFollowing: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 14,
    color: '#8672BB',
  },

  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#3B2D5F',
    width: '90%',
    marginTop: 24,
    marginLeft: 20,
  },

  photo: {
    flex: 10,
    flexDirection: 'column',

    paddingHorizontal: 16,
  },

  labelPhoto: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 8,
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
  footer: {
    width: '100%',
    height: 45,
    backgroundColor: '#201736',
  },
});

export default ProfileStyle;
