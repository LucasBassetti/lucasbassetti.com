import React from 'react'
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
      <S.ProjectsGithubLink>
        <S.ProjectsGithubIcon size={24} /> Check all
      </S.ProjectsGithubLink>
    </>
  )
}

export default Projects
