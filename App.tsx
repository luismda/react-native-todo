import { StatusBar } from 'expo-status-bar'
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'

import { Loading } from './src/components/Loading'
import { Home } from './src/screens/Home'

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  if (!hasLoadedFonts) {
    return <Loading />
  }

  return (
    <>
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent
      />

      <Home />
    </>
  )
}
