export const getCookie = `window.ReactNativeWebView.postMessage(getCookies());`

export const getTitle = `
(function() {
  const title = document.title;
  const fullName = document.fullName

  setTimeout(function() {
    window.ReactNativeWebView.postMessage(JSON.stringify({ title }));
  }, 500);

  let checkCount = 0;
  const interval = setInterval(function() {
    if (checkCount >= 10) {
      clearInterval(interval);
    } else {
      const currentTitle = document.title;
      window.ReactNativeWebView.postMessage(JSON.stringify({ title: currentTitle, fullName }));
      checkCount++;
    }
  }, 500);
})();
true;
`

export const getTitleAndCookiesFirstRun = `
(function() {
  if (!window.firstRunDone) {
    window.firstRunDone = true;
    const title = document.title;
    const cookies = document.cookie;
    const fullName = document.fullName

    setTimeout(function() {
      window.ReactNativeWebView.postMessage(JSON.stringify({ title, cookies, firstRun: true }));
    }, 1000);
    
    let checkCount = 0;
    const interval = setInterval(function() {
      if (checkCount >= 10) {
        clearInterval(interval);
      } else {
        const currentTitle = document.title;
        window.ReactNativeWebView.postMessage(JSON.stringify({ title: currentTitle }));
        checkCount++;
      }
    }, 500);
  }
})();
true;
`

export const showSplashScreen = `document.getElementById('splash-screen').style.display = 'flex'`

export const hideSplashScreen = `document.getElementById('splash-screen').style.display = 'none'`
