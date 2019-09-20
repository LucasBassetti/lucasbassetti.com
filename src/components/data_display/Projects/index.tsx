import React from 'react'
import { Github } from 'styled-icons/boxicons-logos/Github'

import ProjectItem from '../ProjectItem'
import * as S from './styled'

interface IProject {
  description: string
  forkCount: number
  name: string
  starsCount: number
  url: string
}

interface IProps {
  projects: IProject[]
}

const Projects = ({ projects }: IProps) => {
  return (
    <>
      <S.ProjectsTitle>
        I <S.ProjectsHeartIcon size={42} /> Open Source
      </S.ProjectsTitle>
      <S.ProjectsDescription>
        These are some open source projects and experiments that I worked on.
      </S.ProjectsDescription>
      <div>
        {projects.map((project: IProject) => (
          <ProjectItem
            key={project.name}
            description={project.description}
            forkCount={project.forkCount}
            name={project.name}
            starsCount={project.starsCount}
            url={project.url}
          />
        ))}
      </div>
      <S.ProjectsGithubLink
        href="https://github.com/LucasBassetti"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={24} /> Check all
      </S.ProjectsGithubLink>
    </>
  )
}

export default Projects
