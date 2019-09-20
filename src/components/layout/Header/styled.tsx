import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import * as T from '@styles/typography'
import * as V from '@styles/variables'

export const HeaderWrapper = styled.header`
  align-items: center;
  background: var(--bg);
  border-bottom: 1px solid var(--borderColor);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  left: 0;
  position: fixed;
  top: 0;
  transform: translateY(0);
  transition: transform 0.3s ease;
  width: 100%;
  z-index: ${V.ZIndex.header};

  &.headroom {
    transition: transform 0.2s linear;
    will-change: transform;
  }

  &.headroom--pinned {
    transform: translateY(0%);
  }

  &.headroom--unpinned {
    transform: translateY(-100%);
  }
`

export const HeaderBlock = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`

export const HeaderNavBlock = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  ${media.lessThan('medium')`
    border-top: 1px solid var(--borderColor);
    background: var(--bgSolid);
    order: 2
    width: 100%;
  `}
`

export const HeaderProfileWrapper = styled.div`
  left: 0;
  position: absolute;
  top: 0;
  transform: translateY(100%);
  transition: transform 0.1s ease;
`

export const HeaderLogo = styled(AniLink)`
  align-items: center;
  background: var(--primaryColor);
  display: flex;
  height: 32px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 32px;

  &:hover {
    opacity: 1;

    ${HeaderProfileWrapper} {
      transform: translateY(0);
    }
  }
`

export const HeaderLink = styled(AniLink)`
  color: var(--secondaryColor);
  font-size: 1rem;
  margin: 0 ${V.Space.sm};
  position: relative;

  ${T.LinkTransition}

  &:hover {
    color: var(--highlightColor);
  }

  &.active {
    color: var(--highlightColor);
  }

  ${media.lessThan('medium')`
    margin: 0
  `}
`

export const HeaderSocialLink = styled.a`
  color: var(--primaryColor);
  margin-left: 0.75rem;
`
