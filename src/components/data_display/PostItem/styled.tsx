import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import * as T from '@styles/typography'
import * as V from '@styles/variables'

export const PostItemWrapper = styled(AniLink)`
  display: block;
  margin-bottom: ${V.Space.xs};
`

export const PostItemContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const PostItemDate = styled.time`
  color: var(--secondaryColor);
  display: block;
  font-size: 0.9rem;
  letter-spacing: 0.05rem;

  &:not(:last-child) {
    margin-bottom: ${V.Space.xxs};
  }
`

interface IPostItemTitle {
  isMini?: boolean
}

export const PostItemTitle = styled.h2<IPostItemTitle>`
  ${props => (props.isMini ? T.Heading3 : T.Heading1)}

  margin: ${V.Space.xxs} 0 ${V.Space.xs};
`

export const PostItemDescription = styled.p`
  ${T.Subtitle2}
`
