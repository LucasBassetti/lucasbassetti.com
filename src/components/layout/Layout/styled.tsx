import styled from 'styled-components'
import media from 'styled-media-query'

import * as V from '@styles/variables'

export const LayoutWrapper = styled.main`
  margin: auto;
  max-width: 800px;
  min-height: 100vh;
  padding: 4.25rem 1rem;
  transition: background-color ${V.Transition.default};
  will-change: background-color;

  ${media.lessThan('medium')`
    padding-top: 7.125rem;
  `}
`
