import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { ArrowBack } from 'styled-icons/boxicons-regular/ArrowBack'

import * as T from '@styles/typography'
import * as V from '@styles/variables'

export const PortfolioPostCoverImage = styled(Img).attrs({
  alt: 'Introduction Image',
  'aria-hidden': 'true',
})`
  display: block;
  height: 25vh;
  left: calc(-50vw + 50%);
  object-fit: cover;
  position: relative;
  width: 100vw;

  &:not(:last-child) {
    margin-bottom: ${V.Space.default};
  }

  &:after {
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: ${V.ZIndex.default};
  }
`

export const PortfolioPostHeader = styled.div`
  color: var(--primaryColor);
  margin: auto;
  padding: 1rem 0 0;

  ${media.lessThan('large')`
    padding: 3rem 0 0;
  `}
`

export const PortfolioPostBack = styled(AniLink)`
  ${T.Link}

  align-items: center;
  display: inline-flex;
  letter-spacing: 0.05rem;
  margin-bottom: ${V.Space.sm};
`

export const PortfolioPostArrowBackIcon = styled(ArrowBack)`
  margin-right: ${V.Space.xxs};
`

export const PortfolioPostTitle = styled.h1`
  ${T.Title}

  margin: 1rem auto;
`

export const PortfolioPostUrl = styled.a`
  ${T.Link}

  display: inline-block;
  margin-top: 1rem;
`

export const PortfolioPostDescription = styled.h2`
  ${T.Subtitle2}

  a {
    ${T.Link}
  }
`

export const PortfolioPostDate = styled.p`
  color: var(--secondaryColor);
  display: block;
  font-size: 0.9rem;
  letter-spacing: 0.05rem;

  &:not(:last-child) {
    margin-bottom: ${V.Space.xxs};
  }
`

export const MainContent = styled.section`
  margin: auto;

  ${media.lessThan('large')`
    padding: 2rem 0;
  `}

  p:not([class]),
  h1:not([class]),
  h2:not([class]),
  h3:not([class]),
  h4:not([class]),
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--primaryColor);
    font-size: 1.25rem;
    font-weight: 300;
    letter-spacing: 0.069rem;
    line-height: 1.7;

    ${media.lessThan('large')`
      word-break: break-word;
    `}
  }

  p:not([class]) {
    margin: 0 auto 1.6rem;
  }

  ul,
  ol {
    list-style: disc;
    margin: 0 auto 1.6rem;
    padding-left: 2.5rem;
  }

  li {
    padding: 0.625rem 0;

    & > ul {
      margin-bottom: 0;
    }
  }

  li,
  p:not([class]) {
    code {
      word-wrap: break-word;
    }
  }

  img {
    display: block;
    max-width: 100%;
  }

  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;

    ${media.lessThan('large')`
      padding: 0 1rem;
    `}
  }

  blockquote {
    border-left: 0.3rem solid var(--highlightColor);
    color: var(--primaryColor);
    margin: 3.125rem auto;
    padding: 0 1.875rem;
  }

  pre {
    margin: 0 auto 1.6rem;
  }

  hr {
    border: 1px solid var(--borderColor);
    margin: 3rem auto;
  }

  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }

  h1:not([class]),
  h2:not([class]),
  h3:not([class]),
  h4:not([class]),
  h5:not([class]) {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
    margin: 2.4rem auto 1rem;
  }

  h1:not([class]) {
    font-size: 2.8rem;

    ${media.lessThan('large')`
      font-size: 1.875rem;
    `}
  }

  h2:not([class]) {
    font-size: 2.1rem;

    ${media.lessThan('large')`
      font-size: 1.375rem;
    `}
  }

  h3:not([class]) {
    font-size: 1.6rem;

    ${media.lessThan('large')`
      font-size: 1.125rem;
    `}
  }

  h4:not([class]) {
    font-size: 1.4rem;
  }

  h5:not([class]) {
    font-size: 1.2rem;
  }

  strong {
    font-weight: 700;
  }

  .gatsby-resp-image-background-image {
    opacity: 1 !important;
    z-index: 2;
  }

  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;

    &.lazyload {
      opacity: 0;
    }

    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }

  .instagram-media {
    margin: 1rem auto !important;
  }

  a {
    color: var(--highlightColor);
    text-decoration: none;
    transition: opacity 0.5s;

    svg {
      color: var(--primaryColor);
    }
  }
`
