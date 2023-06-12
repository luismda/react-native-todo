import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  emptyList: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 48,
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderTopColor: '#333333',
  },
  clipboardImage: {
    width: 56,
    height: 56,
  },
  emptyListInfo: {
    marginTop: 16,
  },
  emptyListBoldText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    color: '#808080',
  },
  emptyListText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#808080',
  },
})