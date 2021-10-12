import {StyleSheet} from 'react-native';

const HeaderStyle = StyleSheet.create({
  header: {
    height: 46,
    backgroundColor: '#2B2146',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  iconArrow: {
    marginLeft: 16,
  },

  iconDots: {
    marginRight: 16,
    transform: [{rotate: '90deg'}],
  },
});

export default HeaderStyle;
