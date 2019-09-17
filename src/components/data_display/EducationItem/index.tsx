import React from 'react'
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
}: IProps) => (
  <S.EducationItemWrapper
    href={thesisUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
    <S.EducationItemUniversity>{university}</S.EducationItemUniversity>
    <S.EducationItemDegree>{degree}</S.EducationItemDegree>
    <S.EducationItemCourse>{course}</S.EducationItemCourse>
    <S.EducationItemDate>{`${startYear} - ${endYear}`}</S.EducationItemDate>
  </S.EducationItemWrapper>
)

export default EducationItem
