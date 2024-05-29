import { jwtDecode } from 'jwt-decode'

import { userInfo } from '../_api'

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

export const getToken = (cookies: string) => {
  const userTokenMatch = decodeURIComponent(cookies).match(/token:user=([^;]*)/)
  if (!userTokenMatch) return ''
  return userTokenMatch[1]
}

export const decodeCookie = (cookies: string) => {
  const token = getToken(cookies)
  if (!token) return ''
  return jwtDecode(token)
}

export const getUserInfo = async (cookies: string) => {
  const decodedCookie = decodeCookie(cookies)
  const token = getToken(cookies)
  const data = await userInfo(token, decodedCookie?.sub)
  const fullName =
    `${data.message.user_info.user_info.user_frst_nm} ${data.message.user_info.user_info.user_last_nm}` ||
    'Default Name'
  const email: any = data.message.user_info.user_mail_infos.find(
    ({ user_eml_rprs }: any) => user_eml_rprs === 'Y'
  )?.user_eml
  return { fullName: fullName as string, email: email as string }
}
