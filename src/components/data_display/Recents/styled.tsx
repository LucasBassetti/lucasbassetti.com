import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import * as T from '@styles/typography'
import * as V from '@styles/variables'

export const RecentsWrapper = styled.section`
  padding-top: ${V.Space.default};
`

export const RecentsHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: ${V.Space.sm};
`

export const RecentsTitle = styled.h2`
  ${T.Subtitle2}
`

export const RecentsLink = styled(AniLink)`
  ${T.Link}
`
