import React from 'react'
import { FixedObject } from 'gatsby-image'
import { Tech } from '@constants/experience_list'
import { trackEvent } from '@utils/analytics'
import BoxHandler from '../BoxHandler'
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
  const trackExperienceItemClick = () => {
    trackEvent({
      category: 'Experience',
      action: 'click',
      label: `Experience - ${company}`,
    })
  }

  return (
    <S.ExperienceItem
      onClick={trackExperienceItemClick}
      href={companyUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <BoxHandler>
        <S.ExperienceItemWrapper>
          <S.ExperienceItemImage fixed={companyImage} />
          <S.ExperienceItemContent>
            <S.ExperienceItemContentHeader>
              <S.ExperienceItemPosition>{position}</S.ExperienceItemPosition>
              <S.ExperienceItemDate>{date}</S.ExperienceItemDate>
            </S.ExperienceItemContentHeader>
            <S.ExperienceCompany>{company}</S.ExperienceCompany>
            <S.ExperienceItemTech>
              <S.ExperienceItemStackIcon size={16} />
              {tech.join(', ')}
            </S.ExperienceItemTech>
          </S.ExperienceItemContent>
        </S.ExperienceItemWrapper>
      </BoxHandler>
    </S.ExperienceItem>
  )
}

export default ExperienceItem
