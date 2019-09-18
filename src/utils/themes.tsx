import * as V from '@styles/variables'

export const getActiveTheme = (): string => {
  if (typeof document === 'undefined') return ''

  const body = document.querySelector('body')
  return body.classList.contains('dark')
    ? V.Color.grayDarker
    : V.Color.whiteSolid
}
