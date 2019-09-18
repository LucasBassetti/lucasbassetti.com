// ==================================================
// Variables
//
// 1. Spaces
// 2. Colors
// 3. zIndex
// 4. Misc
// ==================================================

// --------------------------------------------------
// 1. Spaces
// --------------------------------------------------

interface Space {
  xxs: `0.4rem`
  xs: `0.8rem`
  sm: `1.6rem`
  default: `2.4rem`
  md: `3.2rem`
  lg: `4.8rem`
  xlg: `6.4rem`
  xxlg: `9.6rem`
}

export const Space: Space = {
  xxs: `0.4rem`,
  xs: `0.8rem`,
  sm: `1.6rem`,
  default: `2.4rem`,
  md: `3.2rem`,
  lg: `4.8rem`,
  xlg: `6.4rem`,
  xxlg: `9.6rem`,
}

export const Height = {
  headerSm: `${Space.lg}`,
  headerLg: `${Space.xlg}`,
  mainTop: `${Space.md}`,
}

// --------------------------------------------------
// 2. Colors
// --------------------------------------------------

export const Color = {
  white: `rgba(255, 255, 255, .9)`,
  black: `rgba(15, 15, 15, .95)`,
  whiteSolid: `#ffffff`,
  blackSolid: `#000000`,
  blue: `#187888`,
  blueLight: `#a1ecf7`,
  grayDarker: `#1d1d1d`,
  grayDark: `#3d3d3d`,
  gray: `#757575`,
  grayLight: `#aaaaaa`,
  grayLighter: `#efefef`,
  grayWhite: `#f5f5f5`,
  yellow: `#e6af05`,
}

// --------------------------------------------------
// 3. zIndex
// --------------------------------------------------

export const ZIndex = {
  bg: `-1`,
  default: `1`,
  footer: `5`,
  header: `5`,
}

// --------------------------------------------------
// 4. Misc
// --------------------------------------------------

export const Transition = {
  default: `.25s`,
}

export const BorderRadius = {
  box: `2px`,
}

export const Border = {
  box: `1px solid var(--borderColor)`,
  default: `1px solid var(--borderColor)`,
}

export const MaxSize = {
  md: `750px`,
  lg: `1080px`,
}
