import styled, { keyframes } from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

const showBorder = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`

export const HeaderWrapper = styled.header`
  align-items: center;
  background: var(--background);
  border-bottom: 1px solid var(--borders);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  left: 0;
  position: fixed;
  top: 0;
  transition: transform 0.3s ease;
  transform: translateY(0);
  width: 100%;
  z-index: 999;

  &.headroom {
    will-change: transform;
    transition: transform 0.2s linear;
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

  ${media.lessThan('medium')`
    &:nth-child(2) {
      border-top: 1px solid var(--borders);
      background: var(--mediumBackground);
      order: 2
      width: 100%;
    }
  `}
`

export const HeaderProfileWrapper = styled.div`
  left: 0;
  top: 0;
  position: absolute;
  transform: translateY(100%);
  transition: transform 0.1s ease;
`

export const HeaderLogo = styled(Link)`
  align-items: center;
  background: var(--texts);
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

export const HeaderLink = styled(Link)`
  color: var(--texts);
  margin: 0 1rem;
  position: relative;
  opacity: 0.9;
  font-weight: 100;

  &:hover {
    color: var(--texts);

    &::before {
      animation: ${showBorder} 0.2s ease forwards;
      background: var(--texts);
      bottom: -0.375rem;
      content: '';
      height: 1px;
      left: 0;
      right: 0;
      position: absolute;
      margin: auto;
    }
  }

  &.active {
    &::before {
      animation: none;
      background: var(--texts);
      bottom: -0.375rem;
      content: '';
      height: 1px;
      left: 0;
      position: absolute;
      width: 100%;
    }
  }

  ${media.lessThan('medium')`
    margin: 0
  `}
`

export const HeaderSocialLink = styled.a`
  color: var(--texts);
  margin-left: 0.75rem;
`
