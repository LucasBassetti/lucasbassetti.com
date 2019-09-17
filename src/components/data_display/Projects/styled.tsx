import styled from 'styled-components'
import media from 'styled-media-query'
import { Heart } from 'styled-icons/boxicons-solid/Heart'
import { Github } from 'styled-icons/boxicons-logos/Github'

export const ProjectsTitle = styled.h1`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 2rem 0 1rem;
`

export const ProjectsDescription = styled.p`
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 100;
`

export const ProjectsHeartIcon = styled(Heart)`
  margin: 0 1rem;

  ${media.lessThan('medium')`
    margin: 0 0.5rem;
    padding: 0 0.5rem;
  `}
`

export const ProjectsGithubLink = styled.a`
  align-items: center;
  color: var(--texts);
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  margin: 2rem auto;
  text-transform: uppercase;
  width: 120px;
`

export const ProjectsGithubIcon = styled(Github)``
