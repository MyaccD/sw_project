import {StyleSheet} from 'react-native';

const CountsModuleStyle = StyleSheet.create({
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
});

export default CountsModuleStyle;
