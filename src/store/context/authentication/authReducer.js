import { AUTH_ERROR, AUTH_LOGOUT, AUTH_SUCCESS, AUTH_TOKEN } from '../../types'

const reducer = (state, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      localStorage.setItem('token', action.payload)
      return {
        ...state,
        token: action.payload,
        auth: true,
      }
    case AUTH_TOKEN:
      localStorage.setItem('token', action.payload)
      return {
        ...state,
        token: action.payload,
        auth: true,
      }
    case AUTH_ERROR:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        auth: false,
      }
    case AUTH_LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        auth: false,
      }
    default:
      return state
  }
}

export default reducer
