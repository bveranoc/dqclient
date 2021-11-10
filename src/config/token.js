import axiosClient from './axios'

const authToken = (token) => {
  if (token) {
    axiosClient.defaults.headers.common['x-access-token'] = token
  } else {
    delete axiosClient.defaults.headers.common['x-access-token']
  }
}

export default authToken
