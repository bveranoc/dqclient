import {
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_LOGOUT,
  SET_PENDING_MESSAGES,
  SET_ERROR,
} from '../../types'

const reducer = (state, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      localStorage.setItem('adm-token', action.payload)
      return {
        ...state,
        token: action.payload,
        auth: true,
        errorMessage: null,
      }
    case AUTH_ERROR:
      localStorage.removeItem('adm-token')
      return {
        ...state,
        token: null,
        auth: false,
        errorMessage: action.payload,
      }
    case AUTH_LOGOUT:
      localStorage.removeItem('adm-token')
      return {
        ...state,
        token: null,
        auth: false,
        errorMessage: null,
      }
    case SET_PENDING_MESSAGES:
      return {
        ...state,
        pendingMessages: action.payload,
      }
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      }
    default:
      return state
  }
}

export default reducer
