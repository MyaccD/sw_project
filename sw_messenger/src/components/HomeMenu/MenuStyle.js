import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  centralView: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '100%',
  },
  press: {
    height: '100%',
    width: '100%',
  },
  container: {
    width: 300,
    backgroundColor: '#2B2146',
    paddingHorizontal: 16,
    height: '100%',
  },
  personalInformation: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 19,
    paddingTop: 29,
  },
  profileImage: {
    width: 71,
    height: 71,
  },
  textContainer: {
    paddingLeft: 20,
  },
  name: {
    color: '#ECEBED',
    fontSize: 14,
    lineHeight: 16,
  },
  link: {
    color: '#8672BB',
    fontSize: 12,
    lineHeight: 16,
  },
  menuList: {
    color: '#FFFFFF',
  },
  item: {
    paddingTop: 50,
  },
  touchBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 9,
    color: '#FFFFFF',
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 16,
  },
});
