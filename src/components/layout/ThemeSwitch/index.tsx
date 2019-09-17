import React, { useEffect, useState } from 'react'
import * as S from './styled'

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<string>(window.__theme || 'dark')

  const isDarkMode: boolean = theme === 'dark'

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <S.ThemeSwitchWrapper className={isDarkMode ? 'dark' : 'light'}>
      <input
        onChange={() => {
          window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
        }}
        checked={!isDarkMode}
        role="checkbox"
        aria-checked={!isDarkMode}
        type="checkbox"
      />
      <label />
    </S.ThemeSwitchWrapper>
  )
}

export default ThemeSwitch
