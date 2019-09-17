import { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    src: url('fonts/Lato-Regular.ttf');
  }

  @font-face {
    font-family: 'Lato Bold';
    src: url('fonts/Lato-Bold.ttf');
  }

  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 16px;
    line-height: 1;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    color: var(--texts);
    font-family: 'Lato', sans-serif;
  }

  pre[class*="language-"] {
    background: #424242;
  }

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
    margin: 0.625rem 0;
  }

  h1 {
    font-size: 2.8rem;

    ${media.lessThan('large')`
      font-size: 1.875rem;
    `}
  }

  h2 {
    font-size: 2.1rem;

    ${media.lessThan('large')`
      font-size: 1.375rem;
    `}
  }

  h3 {
    font-size: 1.6rem;
  
    ${media.lessThan('large')`
      font-size: 1.125rem;
    `}
  }

  h4 {
    font-size: 1.4rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  p, li {
    font-size: 1.25rem;
    line-height: 1.6;
    font-weight: 100;
    margin: 0.3rem auto;
  }

  a {
    color: var(--highlight);
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: var(--highlightHover);
    }
  }

  body.dark {
    --borders: #424242;
    --texts: #fff;
    --highlight: #42a5f5;
    --highlightHover: #2196f3;
    --mediumBackground: #313131;
    --background: #292929;
    --white: #fff;
    --black: #222;
  }

  body.light {
    --borders: #e5e5e5;
    --texts: #292929;
    --highlight: #2196f3;
    --highlightHover: #42a5f5;
    --mediumBackground: #f9f9f9;
    --background: #fff;
    --white: #fff;
    --black: #222;
  }
`
export default GlobalStyles
