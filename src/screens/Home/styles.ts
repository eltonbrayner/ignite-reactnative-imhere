import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
  },
  box: {
    padding: 24,
    gap: 24,
  },
  title: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: { color: '#6B6B6B', fontSize: 16 },
  inputContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  input: {
    flex: 1,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 16,
    padding: 16,
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  participants: {
    gap: 10,
  },
  participantsContainer: {
    maxHeight: '73%',
  },
  withoutParticipants: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
