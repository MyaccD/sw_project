import {StyleSheet} from 'react-native';

const ModalMenu = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  string: {
    width: 339,
    flexDirection: 'row',
    marginTop: 13,
    marginBottom: 14,
    height: 24,
    flex: 1,
    alignItems: 'center',
  },

  text: {
    marginLeft: 12,
    fontFamily: 'HKGrotesk-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },

  separator: {
    opacity: 1,
    backgroundColor: '#3B2D5F',
    height: 1,
  },

  backgroundOutside: {
    flex: 1,
    backgroundColor: '#000000AA',
    justifyContent: 'flex-end',
  },

  backgroundCard: {
    backgroundColor: '#2B2146',
    width: '100%',
  },

  btn: {
    marginTop: 10,
  },
});

export default ModalMenu;
