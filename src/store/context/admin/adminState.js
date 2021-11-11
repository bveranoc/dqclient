import { useReducer } from 'react'
import AdminContext from './adminContext'
import AdminReducer from './adminReducer'

import authToken from '../../../config/token'
import axiosClient from '../../../config/axios'

// Types
import {
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_LOGOUT,
  SET_PENDING_MESSAGES,
  LOADING,
  SET_ERROR,
} from '../../types'

const AdminState = (props) => {
  const initialState = {
    token: null,
    auth: false,
    pendingMessages: 0,
    errorMessage: null,
    loading: false,
  }

  const [state, dispatch] = useReducer(AdminReducer, initialState)

  const authAdmin = async (username, password) => {
    try {
      const res = await axiosClient.post('/admin/login', { username, password })
      dispatch({
        type: AUTH_SUCCESS,
        payload: res.data.token,
      })
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: error.response.data.message,
      })
    }
  }

  const getPendingMessages = async () => {
    try {
      const token = localStorage.getItem('adm-token')
      if (!token) {
        return
      }
      authToken(token)

      const res = await axiosClient.get('/message/pending')
      dispatch({
        type: SET_PENDING_MESSAGES,
        payload: res.data.pendingMessages,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const sendMessages = async () => {
    try {
      const token = localStorage.getItem('adm-token')
      if (!token) {
        return
      }
      authToken(token)

      dispatch({
        type: LOADING,
      })

      await axiosClient.post('/message/send')
      dispatch({
        type: LOADING,
      })
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.response.data.message,
      })
    }
  }

  const logout = () => {
    dispatch({
      type: AUTH_LOGOUT,
    })
  }

  return (
    <AdminContext.Provider
      value={{
        errorMessage: state.errorMessage,
        auth: state.auth,
        pendingMessages: state.pendingMessages,
        loading: state.loading,
        authAdmin,
        logout,
        getPendingMessages,
        sendMessages,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  )
}

export default AdminState
