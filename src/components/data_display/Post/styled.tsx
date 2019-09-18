import styled from 'styled-components'
import media from 'styled-media-query'

export const PostHeader = styled.header`
  color: var(--primaryColor);
  margin: auto;
  padding: 5rem 0 0;

  ${media.lessThan('large')`
    padding: 3rem 0 0;
  `}
`

export const PostTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 1rem auto;

  ${media.lessThan('large')`
    font-size: 2.6rem;
    line-height: 1.1;
  `}
`

export const PostDescription = styled.h2`
  font-size: 2rem;
  font-weight: 200;

  ${media.lessThan('large')`
    font-size: 1.6rem;
    line-height: 1.3;
  `}
`

export const PostDate = styled.p`
  font-size: 1.1rem;
  font-weight: 100;
`

export const MainContent = styled.section`
  margin: auto;
  padding: 2rem 0;

  ${media.lessThan('large')`
    padding: 2rem 0;
  `}

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--primaryColor);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;

    ${media.lessThan('large')`
      word-break: break-word;
    `}
  }

  p {
    margin: 0 auto 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
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

  p,
  li {
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

  hr {
    border: 1px solid var(--borderColor);
    margin: 3rem auto;
  }

  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
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
    border-bottom: 1px dashed var(--highlightColor);
    color: var(--highlightColor);
    text-decoration: none;
    transition: opacity 0.5s;

    svg {
      color: var(--primaryColor);
    }

    &:hover {
      opacity: 0.8;
    }
  }
`
