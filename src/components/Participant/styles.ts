import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    gap: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    backgroundColor: '#1F1E25',
    flex: 1,
    color: '#FFF',
    fontSize: 16,
    padding: 16,
    height: 56,
    borderRadius: 5,
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 5,
    backgroundColor: '#E23C44',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

// button: {

//   backgroundColor: '#31CF67',
//   justifyContent: 'center',
//   alignItems: 'center',
// },
// buttonText: {
//   color: '#FFF',
//   fontSize: 16,
//   fontWeight: 'bold',
// },
