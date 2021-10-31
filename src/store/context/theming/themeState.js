import { useReducer } from 'react'
import ThemeReducer from './themeReducer'
import ThemeContext from './themeContext'

import { SWITCH_THEME } from '../../types'

const ThemeState = (props) => {
  const initialState = {
    isWhiteTheme: true,
  }

  const [state, dispatch] = useReducer(ThemeReducer, initialState)

  const switchTheme = (data) => {
    dispatch({
      type: SWITCH_THEME,
      payload: data,
    })
  }

  return (
    <ThemeContext.Provider
      value={{
        isWhiteTheme: state.isWhiteTheme,
        switchTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeState
