export const checkFrontPage = (url: string) => {
  const excludedUrl = ['login', 'register', 'forgot']
  if (
    url.split('/').includes('user') &&
    !excludedUrl.some((e) => url.split('/').some((item) => item.startsWith(e)))
  ) {
    return false
  } else {
    return true
  }
}
