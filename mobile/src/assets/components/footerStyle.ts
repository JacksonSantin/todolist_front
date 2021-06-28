import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  footer: {
    position: 'absolute',
    right: 24,
    bottom: 32,

    borderRadius: 20,

    flexDirection: 'row',
    alignSelf: 'flex-end',

    elevation: 3,
  },

  createToDoList: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;