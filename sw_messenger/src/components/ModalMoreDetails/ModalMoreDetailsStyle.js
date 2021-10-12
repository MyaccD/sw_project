import {StyleSheet} from 'react-native';

const ModalMoreDetailsStyle = StyleSheet.create({
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textTitle: {
    fontFamily: 'HKGrotesk-Bold',
    color: '#ECEBED',
    fontSize: 16,
    marginTop: 33,
  },

  backspace: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 37,
    marginLeft: 236,
  },

  container: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  labelText: {
    width: 339,
    marginTop: 11,
    flexDirection: 'row',
    height: 36,
    flex: 1,
    alignItems: 'flex-start',
  },

  strings: {
    marginLeft: 12,
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 14,
    color: '#C3B8E0',
  },

  background: {
    flex: 1,
    backgroundColor: '#000000AA',
    justifyContent: 'flex-end',
  },

  modalWindow: {
    backgroundColor: '#2B2146',
    width: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
});

export default ModalMoreDetailsStyle;
