import { POTENTOK_WEB } from '@env'
import React, { useRef, useState } from 'react'
import { StatusBar, View } from 'react-native'
import { WebView, WebViewNavigation } from 'react-native-webview'

import Header from './_components/Header'
import { checkFrontPage } from './_helpers/functions'

const App = () => {
  const webviewRef: any = useRef('')
  const [isFrontPage, setFrontPage] = useState<boolean>(true)
  const [titlePage, setTitlePage] = useState([])

  const goBack = () => {
    webviewRef.current.goBack()
  }

  const onNavigationChange = (navState: WebViewNavigation) => {
    const url = navState.url
    if (checkFrontPage(url)) {
      setFrontPage(true)
    } else {
      setFrontPage(false)
    }
  }

  const changeTitle = (msg: any) => {
    const titlePages = msg.nativeEvent.data
    setTitlePage(titlePages.split('~').map((item: any) => item.trim()))
  }

  return (
    <>
      <StatusBar backgroundColor={'#330066'} />
      <View style={{ flex: 1 }}>
        {!isFrontPage && <Header titlePage={titlePage} onPressArrow={goBack} />}
        <WebView
          ref={webviewRef}
          source={{ uri: POTENTOK_WEB as string }}
          style={{ flex: 1 }}
          injectedJavaScript={'window.ReactNativeWebView.postMessage(document.title)'}
          onNavigationStateChange={onNavigationChange}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          onMessage={changeTitle}
        />
      </View>
    </>
  )
}

export default App
