import React from 'react'
import { FixedObject } from 'gatsby-image'
import { Tech } from '../../../constants/experience_list'
import * as S from './styled'

interface IProps {
  date: string
  position: string
  tech: Tech[]
  company: string
  companyImage: FixedObject
  companyUrl: string
}

const ExperienceItem = ({
  date,
  position,
  tech,
  company,
  companyImage,
  companyUrl,
}: IProps) => {
  console.log(companyImage)

  return (
    <S.ExperienceItemWrapper>
      <S.ExperienceItemImage fixed={companyImage} />
      <S.ExperienceItemContent>
        <S.ExperienceItemContentHeader>
          <S.ExperienceItemPosition>{position}</S.ExperienceItemPosition>
          <S.ExperienceItemDate>{date}</S.ExperienceItemDate>
        </S.ExperienceItemContentHeader>
        <S.ExperienceCompany
          href={companyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {company}
        </S.ExperienceCompany>
        <S.ExperienceItemTech>
          {tech.map(techItem => (
            <S.ExperienceItemTechItem key={techItem}>
              {techItem}
            </S.ExperienceItemTechItem>
          ))}
        </S.ExperienceItemTech>
      </S.ExperienceItemContent>
    </S.ExperienceItemWrapper>
  )
}

export default ExperienceItem
