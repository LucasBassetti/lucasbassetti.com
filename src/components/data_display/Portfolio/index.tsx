import React from 'react'
import PortfolioItem from '../PortfolioItem'
import { FluidObject } from 'gatsby-image'
import * as S from './styled'

interface IPortfolio {
  date: string
  description: string
  image: FluidObject
  slug: string
  tags: string[]
  title: string
}

interface IProps {
  portfolio: IPortfolio[]
}

const Portfolio = ({ portfolio }: IProps) => {
  return (
    <>
      <S.PortfolioTitle>
        I <S.PortfolioHeartIcon size={42} /> Work Remotely
      </S.PortfolioTitle>
      <S.PortfolioDescription>
        Here are some of my works done over these 4 years working remotely.
      </S.PortfolioDescription>
      <div>
        {portfolio.map((item: IPortfolio) => (
          <PortfolioItem
            key={item.title}
            date={item.date}
            description={item.description}
            image={item.image}
            slug={item.slug}
            tags={item.tags}
            title={item.title}
          />
        ))}
      </div>
    </>
  )
}

export default Portfolio
