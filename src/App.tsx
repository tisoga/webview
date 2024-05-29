import React, { useRef, useState } from 'react'
import { StatusBar, View } from 'react-native'
import { WebView, WebViewNavigation } from 'react-native-webview'

import Header from './_components/Header'
import { checkFrontPage, getUserInfo } from './_helpers/functions'
import {
  getTitle,
  getTitleAndCookiesFirstRun,
  hideSplashScreen,
  showSplashScreen,
} from './_helpers/injectedJavascript'

const App = () => {
  const webviewRef: any = useRef('')
  const [isFrontPage, setFrontPage] = useState<boolean>(true)
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
  })
  const [titlePage, setTitlePage] = useState([])

  const goBack = () => {
    webviewRef.current.goBack()
  }

  const setHeader = (url: string) => {
    if (checkFrontPage(url)) {
      setFrontPage(true)
    } else {
      setFrontPage(false)
    }
  }

  const onNavigationChange = (navState: WebViewNavigation) => {
    const url = navState.url
    if (navState.url !== undefined) {
      webviewRef.current.injectJavaScript(getTitle)
    }
    setHeader(url)
  }

  const changeTitle = async (titlePages: any) => {
    setTitlePage(titlePages.split('~').map((item: any) => item.trim()))
  }

  const onHandlerMessage = async (msg: any) => {
    const data = JSON.parse(msg.nativeEvent.data)

    if (data.firstRun) {
      setFrontPage(true)
      webviewRef.current.injectJavaScript(showSplashScreen)
      if (data.cookies) {
        setProfile(await getUserInfo(data.cookies))
        setHeader(msg.nativeEvent.url)
      }
      webviewRef.current.injectJavaScript(hideSplashScreen)
    }
    changeTitle(data.title)
  }

  return (
    <>
      <StatusBar backgroundColor={'#330066'} />
      <View style={{ flex: 1 }}>
        {!isFrontPage && (
          <Header
            titlePage={titlePage}
            onPressArrow={goBack}
            email={profile.email}
            fullName={profile.fullName}
          />
        )}
        <WebView
          ref={webviewRef}
          source={{ uri: 'http://34.124.188.214/user/login' }}
          style={{ flex: 1 }}
          onLoadEnd={() => webviewRef.current.injectJavaScript(getTitleAndCookiesFirstRun)}
          onNavigationStateChange={onNavigationChange}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          onMessage={onHandlerMessage}
        />
      </View>
    </>
  )
}

export default App
