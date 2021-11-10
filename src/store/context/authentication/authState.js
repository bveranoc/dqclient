import { useReducer } from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'

import axiosClient from '../../../config/axios'

// Types
import { AUTH_SUCCESS, AUTH_ERROR, AUTH_LOGOUT, AUTH_TOKEN } from '../../types'

const AuthState = (props) => {
  const initialState = {
    token: null,
    auth: false,
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const authUser = async (firstName, lastName, email, socialProvider) => {
    try {
      const res = await axiosClient.post('/user/auth', {
        firstName,
        lastName,
        email,
        socialProvider,
      })
      dispatch({
        type: AUTH_SUCCESS,
        payload: res.data.token,
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type: AUTH_ERROR,
      })
    }
  }

  const setToken = (token) => {
    dispatch({
      type: AUTH_TOKEN,
      payload: token,
    })
  }

  const logout = () => {
    dispatch({
      type: AUTH_LOGOUT,
    })
  }

  return (
    <AuthContext.Provider
      value={{ auth: state.auth, authUser, logout, setToken }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
