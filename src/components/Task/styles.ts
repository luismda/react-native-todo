import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 8,
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 8,
    marginBottom: 8,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#333333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: 'transparent',
    borderRadius: 999,
    borderWidth: 1.8,
    borderStyle: 'solid',
    borderColor: '#4EA8DE',
  },
  checkboxMarked: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E60CE',
    borderRadius: 999,
  },
  taskName: {
    flex: 1,
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#F2F2F2',
    lineHeight: 20,
  },
  taskNameMarked: {
    flex: 1,
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#808080',
    textDecorationLine: 'line-through',
    lineHeight: 20,
  },
  removeButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
