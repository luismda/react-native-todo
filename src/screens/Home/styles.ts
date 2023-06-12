import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingBottom: 42,
  },
  header: {
    height: 172,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: -32,
    marginHorizontal: 24,
  },
  button: {
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
  },
  metrics: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 20,
    marginHorizontal: 24,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  createdText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    color: '#4EA8DE',
  },
  completedText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    color: '#8284FA',
  },
  counterText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 12,
    color: '#D9D9D9',
    backgroundColor: '#333333',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  taskList: {
    marginHorizontal: 24,
  },
})
