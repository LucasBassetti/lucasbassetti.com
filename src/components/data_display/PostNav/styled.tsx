import styled from 'styled-components'
import media from 'styled-media-query'

import * as V from '@styles/variables'
import * as T from '@styles/typography'

export const PostNav = styled.nav`
  ${media.greaterThan('small')`
    display: flex;
    justify-content: space-between;
  `}

  &:not(:first-child) {
    border-top: ${V.Border.default};
    margin-top: ${V.Space.lg};
    padding-top: ${V.Space.default};
  }
`

export const PrevTitle = styled.h2`
  ${T.Subtitle2}

  height: ${V.Space.default};
  margin-bottom: ${V.Space.xs};
`

export const NextTitle = styled.h2`
  ${T.Subtitle2}

  height: ${V.Space.default};
  margin-bottom: ${V.Space.xs};
  text-align: right;
`

export const NavItem = styled.div`
  display: block;

  ${media.lessThan('small')`
    &:not(:last-child) {
      margin-bottom: ${V.Space.default};
    }
  `}

  ${media.greaterThan('small')`
    max-width: calc(50% - ${V.Space.xs});
    width: 50%;

    > a {
      height: 100%;
    }
  `}
`
