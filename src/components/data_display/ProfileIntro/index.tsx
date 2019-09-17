import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import * as S from './styled'

const ProfilePhoto = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "general/profile.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <S.ProfileIntroWrapper>
      <S.ProfileIntroPhoto>
        <Img fluid={avatarImage.childImageSharp.fluid} />
      </S.ProfileIntroPhoto>
      <S.ProfileIntroText>
        <h1>Hi, I'm Lucas!</h1>
        <p>
          I'm a Mobile and Front-end Developer that loves open-source and
          discovering new technologies. I have been working with web since 2011.
          Currently I’m Front-end Developer at{' '}
          <a
            href="https://yachtlife.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            YachtLife
          </a>
          , the #1 Yacht Brokerage Company.
        </p>
      </S.ProfileIntroText>
    </S.ProfileIntroWrapper>
  )
}

export default ProfilePhoto
