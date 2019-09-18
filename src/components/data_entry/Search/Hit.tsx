import React from 'react'
import PostItem from '../../data_display/PostItem'

interface IProps {
  hit: {
    date: string
    description: string
    slug: string
    tags: string[]
    timeToRead: number
    title: string
  }
}

const Hit = ({
  hit: { date, description, slug, tags, timeToRead, title },
}: IProps) => (
  <PostItem
    tags={tags}
    date={date}
    description={description}
    slug={slug}
    timeToRead={timeToRead}
    title={title}
  />
)

export default Hit
