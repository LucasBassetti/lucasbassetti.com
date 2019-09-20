import React, { useEffect, useState } from 'react'
import { trackEvent } from '@utils/analytics'
import * as S from './styled'

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<string>(
    typeof window !== 'undefined' && window.__theme ? window.__theme : 'dark'
  )

  const isDarkMode: boolean = theme === 'dark'

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  useEffect(() => {
    if (window.DISQUS !== undefined) {
      window.setTimeout(() => {
        window.DISQUS.reset({
          reload: true,
        })
      }, 300)
    }
  }, [theme])

  const onThemeChange = () => {
    const newTheme: string = isDarkMode ? 'light' : 'dark'

    window.__setPreferredTheme(newTheme)

    trackEvent({
      category: 'Theme',
      action: 'click',
      label: `Theme - change to ${newTheme}`,
    })
  }

  return (
    <S.ThemeSwitchWrapper className={isDarkMode ? 'dark' : 'light'}>
      <input
        onChange={onThemeChange}
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
