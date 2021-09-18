import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { SafeAreaView } from 'react-native'
import { Navigation } from './src/navigation'
import { store } from './src/store'
import styles from './globalStyles'

const App = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeArea}>
        <Navigation/>
      </SafeAreaView>
    </Provider>
  )
}

export default App
