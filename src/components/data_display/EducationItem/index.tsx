import React from 'react'
import { trackEvent } from '@utils/analytics'
import BoxHandler from '../BoxHandler'
import * as S from './styled'

interface IProps {
  course: string
  degree: string
  endYear: number
  startYear: number
  thesisUrl: string
  university: string
}

const EducationItem = ({
  course,
  degree,
  endYear,
  startYear,
  thesisUrl,
  university,
}: IProps) => {
  const trackEducationItemClick = () => {
    trackEvent({
      category: 'Education',
      action: 'click',
      label: `Education - ${degree}`,
    })
  }

  return (
    <S.EducationItemWrapper
      onClick={trackEducationItemClick}
      href={thesisUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <BoxHandler>
        <S.EducationItemContainer>
          <S.EducationItemUniversity>{university}</S.EducationItemUniversity>
          <S.EducationItemDegree>{degree}</S.EducationItemDegree>
          <S.EducationItemCourse>{course}</S.EducationItemCourse>
          <S.EducationItemDate>{`${startYear} - ${endYear}`}</S.EducationItemDate>
        </S.EducationItemContainer>
      </BoxHandler>
    </S.EducationItemWrapper>
  )
}

export default EducationItem
