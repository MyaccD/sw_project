import {StyleSheet} from 'react-native';

const HeaderStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#2B2146',
  },
  header: {
    height: 46,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  iconDots: {
    transform: [{rotate: '90deg'}],
  },
});

export default HeaderStyle;
