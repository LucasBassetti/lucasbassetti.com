import styled from 'styled-components'
import media from 'styled-media-query'
import { Heart } from 'styled-icons/boxicons-solid/Heart'
import { Github } from 'styled-icons/boxicons-logos/Github'

import * as T from '@styles/typography'
import * as V from '@styles/variables'

export const ProjectsTitle = styled.h1`
  ${T.Title}

  align-items: center;
  display: flex;
  justify-content: center;
  margin: ${V.Space.default} 0 ${V.Space.sm};
`

export const ProjectsDescription = styled.p`
  ${T.Subtitle1}

  margin-bottom: ${V.Space.default};
  text-align: center;
`

export const ProjectsHeartIcon = styled(Heart)`
  margin: 0 1rem;

  ${media.lessThan('medium')`
    margin: 0 0.5rem;
    padding: 0 0.5rem;
  `}
`

export const ProjectsGithubLink = styled.a`
  ${T.Link}

  align-items: center;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
  margin: 2rem auto;
  text-transform: uppercase;
  width: 120px;
`

export const ProjectsGithubIcon = styled(Github)``
