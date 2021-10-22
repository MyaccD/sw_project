import {StyleSheet} from 'react-native';

const SettingsStyle = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 17,
    marginBottom: 4,
  },
  backButton: {
    width: 22,
  },
  headerText: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#2B2146',
  },
  item: {
    paddingBottom: 9,
    paddingTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    fontFamily: 'HKGrotesk-Bold',
    marginLeft: 12,
    color: '#FFFFFF',
    fontSize: 16,
  },
  textOut: {
    fontFamily: 'HKGrotesk-Bold',
    marginLeft: 12,
    color: '#8672BB',
    fontSize: 16,
  },
});

export default SettingsStyle;
