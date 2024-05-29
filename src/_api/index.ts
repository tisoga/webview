import axios from 'axios'

const SERVER_URL = 'https://dev-user-api.potentok.com/api/v1'

export const userInfo = async (token: any, user_id: any) => {
  const data = {
    user_id: user_id,
  }
  try {
    const res = await axios.post(`${SERVER_URL}/member/user_info`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  } catch (e) {
    console.log(e)
  }
}

export const logout = async (token: any, user_id: any) => {
  const data = {
    user_id: user_id,
  }
  try {
    const res = await axios.post(`${SERVER_URL}/auth/logout`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  } catch (e) {
    console.log(e)
  }
}
