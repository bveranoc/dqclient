import { useReducer } from 'react'
import MsgContext from './msgContext'
import MsgReducer from './msgReducer'

// Types
import { SAVE_HOME_DATA, SAVE_DESTINATARY } from '../../types'

const MsgState = (props) => {
  const initialState = {
    message: '',
    isAnonymus: false,
    bgColor: '#FFFFFF',
    textColor: '#000000',
    sendingDate: null,
    destinatary: null,
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

  return (
    <MsgContext.Provider
      value={{
        message: state.message,
        isAnonymus: state.isAnonymus,
        bgColor: state.bgColor,
        textColor: state.textColor,
        sendingDate: state.sendingDate,
        destinatary: state.destinatary,
        saveHomeData,
        saveDestinatary,
      }}
    >
      {props.children}
    </MsgContext.Provider>
  )
}

export default MsgState
