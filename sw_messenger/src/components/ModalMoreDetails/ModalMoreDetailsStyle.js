import {StyleSheet} from 'react-native';

const ModalMoreDetailsStyle = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  contentContainer: {
    backgroundColor: '#2B2146',
    paddingHorizontal: 16,
    paddingTop: 13,
    paddingBottom: 53,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '100%',
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'HKGrotesk-Bold',
    color: '#ECEBED',
    fontSize: 16,
    lineHeight: 16,
    paddingTop: 20,
    paddingBottom: 10,
  },
  text: {
    fontFamily: 'HKGrotesk_Bold',
    color: '#C3B8E0',
    fontSize: 14,
    lineHeight: 16,
    marginLeft: 9,
  },

  item: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  separator: {
    marginTop: 20,
    opacity: 1,
    backgroundColor: '#3B2D5F',
    height: 1,
  },

  press: {
    height: '80%',
    width: '100%',
  },
});

export default ModalMoreDetailsStyle;
