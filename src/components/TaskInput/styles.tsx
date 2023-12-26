import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 33,
    marginTop: 40,
    height: 56,
    gap: 4,
  },
  inputContainer: {
    backgroundColor: '#262626',
    borderRadius: 6,
    flex: 1,
    paddingHorizontal: 16,
  },
  input: {
    backgroundColor: 'transparent',
    color: '#F2F2F2',
    height: '100%',
  },
  plusIcon: {
    width: 16,
    height: 16,
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    height: '100%',
    padding: 18,
  },
});