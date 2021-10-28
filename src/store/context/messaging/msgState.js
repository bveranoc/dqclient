import { useReducer } from 'react'
import MsgContext from './msgContext'
import MsgReducer from './msgReducer'

// Types

export default (props) => {
  const initialState = {
    message: null,
    destination: null,
    bgColor: null,
    textColor: null,
    isAnonymus: null,
    sendingDate: null,
  }

  const [state, dispatch] = useReducer(MsgReducer, initialState)

  return (
    <MsgContext.Provider
      value={{
        message: state.message,
        destination: state.destination,
        bgColor: state.bgColor,
        textColor: state.textColor,
        isAnonymus: state.isAnonymus,
        sendingDate: state.sendingDate,
      }}
    >
      {props.children}
    </MsgContext.Provider>
  )
}
