import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'lightgray',
    height: 50,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  leftIconContainer: {
    marginLeft: 15,
  },
  inputText: {
    backgroundColor: 'transparent',
    width: 'auto',
    marginLeft: 10,
    fontSize: 16,
    lineHeight: 20,
    flex: 1,
  },
  rightIconContainer: {
    marginRight: 15,
  },
});
