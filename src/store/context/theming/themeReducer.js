import { SWITCH_THEME } from '../../types'

const reducer = (state, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return {
        ...state,
        isWhiteTheme: action.payload,
      }
    default:
      return state
  }
}

export default reducer
