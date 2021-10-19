import {StyleSheet} from 'react-native';

const HomeStyle = StyleSheet.create({
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
  iconRigth: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 59,
  },
});

export default HomeStyle;
