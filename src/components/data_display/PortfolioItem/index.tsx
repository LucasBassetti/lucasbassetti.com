import React from 'react'
import { getActiveTheme } from '@utils/themes'
import { FluidObject } from 'gatsby-image'
import Tags from '../Tags'
import BoxHandler from '../BoxHandler'
import * as S from './styled'

interface IProps {
  date: string
  description: string
  image: FluidObject
  slug: string
  tags: string[]
  title: string
}

const PortfolioItem = ({
  date,
  description,
  image,
  slug,
  tags,
  title,
}: IProps) => (
  <S.PortfolioItemWrapper
    to={`/portfolio/${slug}`}
    bg={getActiveTheme()}
    cover={true}
    direction="down"
  >
    <BoxHandler>
      <S.PortfolioItemContent>
        <S.PortfolioItemImg fluid={image} />
        <S.PortfolioItemText>
          <S.PortfolioItemDate>{date}</S.PortfolioItemDate>
          <S.PortfolioItemTitle>{title}</S.PortfolioItemTitle>
          <S.PortfolioItemDescription>{description}</S.PortfolioItemDescription>
          <Tags tags={tags} />
        </S.PortfolioItemText>
      </S.PortfolioItemContent>
    </BoxHandler>
  </S.PortfolioItemWrapper>
)

export default PortfolioItem
