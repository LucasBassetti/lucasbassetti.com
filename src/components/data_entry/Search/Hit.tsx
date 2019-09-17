import React from 'react'
import PostItem from '../../data_display/PostItem'

interface IProps {
  hit: {
    category: 'TS' | 'JS' | 'CSS' | 'MISC'
    date: string
    description: string
    slug: string
    timeToRead: number
    title: string
  }
}

const Hit = ({
  hit: { category, date, description, slug, timeToRead, title },
}: IProps) => (
  <PostItem
    category={category}
    date={date}
    description={description}
    slug={slug}
    timeToRead={timeToRead}
    title={title}
  />
)

export default Hit
