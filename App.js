import React, { Component } from 'react'
import WebView from 'react-native-webview'
import { StatusBar, StyleSheet} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {

    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={styles.flexContainer} forceInset={{top: 'always', bottom: 'never'}}>
            <StatusBar barStyle="light-content" />
          </SafeAreaView>
          <WebView style={{paddingBottom: '1%'}} source={{ uri: 'http://localhost:3000/' }} />
          <SafeAreaView style={styles.bottom} forceInset={{top: 'never', bottom: 'never'}}>
            
          </SafeAreaView>
        </SafeAreaProvider>
      </>
    )
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    maxHeight: '.1%',
    backgroundColor: '#262626',
    
  },
  bottom: {
    flex: 1,
    opacity: 0,
    maxHeight: '.1%'
  }
})

export default App
