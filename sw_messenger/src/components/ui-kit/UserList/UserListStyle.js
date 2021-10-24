import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
  },

  image: {
    borderRadius: 22,
    width: 43,
    height: 43,
  },
  text: {
    paddingLeft: 10,
  },
  nameText: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 14,
    lineHeight: 16,
    color: '#FFFFFF',
  },
  cityText: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 12,
    lineHeight: 16,
    color: '#8672BB',
  },
});
