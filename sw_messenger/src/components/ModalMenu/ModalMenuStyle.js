import {StyleSheet} from 'react-native';

const ModalMenu = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  container: {
    width: '100%',
  },

  backgroundCard: {
    backgroundColor: '#2B2146',
    paddingHorizontal: 16,
  },

  string: {
    flexDirection: 'row',
    paddingVertical: 16,
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

  btn: {
    marginTop: 10,
    backgroundColor: '#2B2146',
    borderRadius: 15,
    marginTop: 10,
    paddingVertical: 17,
  },

  btnText: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },

  press: {
    height: '80%',
    width: '100%',
  },
});

export default ModalMenu;
