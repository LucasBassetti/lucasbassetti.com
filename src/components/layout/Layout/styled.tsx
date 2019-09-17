import styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutWrapper = styled.main`
  margin: auto;
  max-width: 900px;
  min-height: 100vh;
  padding: 4.25rem 1rem;

  ${media.lessThan('medium')`
    padding-top: 7.125rem;
  `}
`
