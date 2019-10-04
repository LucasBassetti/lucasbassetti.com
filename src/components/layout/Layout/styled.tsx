import styled from 'styled-components'
import media from 'styled-media-query'

import * as V from '@styles/variables'

export const LayoutWrapper = styled.main.attrs({
  role: 'main',
})`
  margin: auto;
  max-width: 800px;
  min-height: 100vh;
  padding: ${V.Height.headerLg} ${V.Space.xs} ${V.Space.lg};
  transition: background-color ${V.Transition.default};
  will-change: background-color;

  ${media.lessThan('medium')`
    padding-top: ${V.Height.headerSm};
  `}
`
