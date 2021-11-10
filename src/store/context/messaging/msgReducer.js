import {
  SAVE_HOME_DATA,
  SAVE_DESTINATARY,
  CLEAR_MESSAGE,
  SET_ERROR,
} from '../../types'

const reducer = (state, action) => {
  switch (action.type) {
    case SAVE_HOME_DATA:
      return {
        ...state,
        body: action.payload.body,
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
    case CLEAR_MESSAGE:
      return {
        body: '',
        isAnonymus: false,
        bgColor: '#FFFFFF',
        textColor: '#000000',
        sendingDate: null,
        destinatary: null,
        errorMsg: '',
      }
    case SET_ERROR:
      return {
        ...state,
        errorMsg: action.payload,
      }
    default:
      return state
  }
}

export default reducer
