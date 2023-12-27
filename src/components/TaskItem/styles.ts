import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  taskItemContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#262626',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  checkboxTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 10,
  },
  checkboxContainer: {
    height: 18,
    width: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#4EA8DE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxDone: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: 'green',
  },
  taskTitle: {
    fontSize: 14, 
    lineHeight: 20,
    flex: 1,
  },
  removeButtonContainer: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
})