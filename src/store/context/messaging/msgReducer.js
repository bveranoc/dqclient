import { SAVE_HOME_DATA, SAVE_DESTINATARY } from '../../types'

const reducer = (state, action) => {
  switch (action.type) {
    case SAVE_HOME_DATA:
      return {
        ...state,
        message: action.payload.message,
        isAnonymus: action.payload.isAnonymus,
        bgColor: action.payload.bgColor,
        textColor: action.payload.textColor,
        sendingDate: action.payload.sendingDate,
      }
    case SAVE_DESTINATARY:
      return {
        ...state,
        destinatary: action.payload,
      }
    default:
      return state
  }
}

export default reducer
