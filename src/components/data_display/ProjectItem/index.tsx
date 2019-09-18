import React from 'react'
import { Star } from 'styled-icons/octicons/Star'
import { RepoForked } from 'styled-icons/octicons/RepoForked'
import BoxHandler from '../BoxHandler'
import * as S from './styled'

interface IProps {
  description: string
  forkCount: number
  name: string
  starsCount: number
  url: string
}

const ProjectItem = ({
  description,
  forkCount,
  name,
  starsCount,
  url,
}: IProps) => (
  <S.ProjectItemWrapper href={url} target="_blank" rel="noopener noreferrer">
    <BoxHandler>
      <S.ProjectItemName>{name}</S.ProjectItemName>
      <S.ProjectItemStatsWrapper>
        <S.ProjectItemStatsItem>
          <Star size={16} />
          <S.ProjectItemStatsValue>{starsCount}</S.ProjectItemStatsValue>
        </S.ProjectItemStatsItem>
        <S.ProjectItemStatsItem>
          <RepoForked size={16} />
          <S.ProjectItemStatsValue>{forkCount}</S.ProjectItemStatsValue>
        </S.ProjectItemStatsItem>
      </S.ProjectItemStatsWrapper>
      <S.ProjectItemDescription>
        {description.replace(/:.*:/, '')}
      </S.ProjectItemDescription>
    </BoxHandler>
  </S.ProjectItemWrapper>
)

export default ProjectItem
