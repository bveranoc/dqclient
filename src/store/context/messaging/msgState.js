import { useReducer } from 'react'
import MsgContext from './msgContext'
import MsgReducer from './msgReducer'

import authToken from '../../../config/token'
import axiosClient from '../../../config/axios'

// Types
import {
  SAVE_HOME_DATA,
  SAVE_DESTINATARY,
  CLEAR_MESSAGE,
  SET_ERROR,
} from '../../types'

const MsgState = (props) => {
  const initialState = {
    body: '',
    isAnonymus: false,
    bgColor: '#FFFFFF',
    textColor: '#000000',
    sendingDate: null,
    destinatary: null,
    errorMsg: '',
  }

  const [state, dispatch] = useReducer(MsgReducer, initialState)

  const saveHomeData = (data) => {
    dispatch({
      type: SAVE_HOME_DATA,
      payload: data,
    })
  }

  const saveDestinatary = (data) => {
    dispatch({
      type: SAVE_DESTINATARY,
      payload: data,
    })
  }

  const sendMessage = async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      authToken(token)
      await axiosClient.post('/message', state)

      dispatch({
        type: CLEAR_MESSAGE,
      })
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.response.data.message,
      })
    }
  }

  return (
    <MsgContext.Provider
      value={{
        body: state.body,
        isAnonymus: state.isAnonymus,
        bgColor: state.bgColor,
        textColor: state.textColor,
        sendingDate: state.sendingDate,
        destinatary: state.destinatary,
        errorMsg: state.errorMsg,
        saveHomeData,
        saveDestinatary,
        sendMessage,
      }}
    >
      {props.children}
    </MsgContext.Provider>
  )
}

export default MsgState
