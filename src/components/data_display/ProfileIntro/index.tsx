import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import * as S from './styled'

interface IProps {
  full?: boolean
}

const ProfileIntro = ({ full = false }: IProps) => {
  const { aboutImage, avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "images/general/profile.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        aboutImage: file(relativePath: { eq: "images/general/about.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <S.ProfileIntroWrapper>
      {!full && (
        <S.ProfileIntroPhoto>
          <Img fluid={avatarImage.childImageSharp.fluid} />
        </S.ProfileIntroPhoto>
      )}
      <S.ProfileIntroText>
        <S.ProfileIntroName>Hi, I'm Lucas!</S.ProfileIntroName>
        {full ? (
          <>
            <p>
              I’m a Mobile and Front-end Developer with 4+ years experience in
              remote work and 8+ years with web technologies. I'm fast-learner
              that loves open source and discovering new technologies.
            </p>
            <p>
              I received my Computer Science Bachelor's degree in 2014 and my
              Master's degree in 2017 from the Federal University of Espírito
              Santo (Vitória, Brazil). My graduation Final Project and Master
              thesis contributed to improve the quality of public data from
              Brazilian government using semantic interoperability and semantic
              web techniques. The first one was finalist of a Final Project
              Award in Bachelor’s Degree of Information Technology Area realized
              by SINDINFO.
            </p>
            <p>
              Since I started working remotely I passed through companies from
              US, Brazil, Switzerland and London and worked with different
              technologies such React, React Native, Redux, TypeScript, Gatsby,
              NodeJS, Firebase, MeteorJS, MongoDB and MySQL. Currently I'm
              Front-end Developer at YachtLife, the #1 Yacht Brokerage Company.
            </p>
            <p>
              In 2016, I started contributing to open source projects. My main
              projects are:{' '}
              <a
                href="https://github.com/LucasBassetti/react-simple-chatbot"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Simple Chatbot
              </a>{' '}
              and{' '}
              <a
                href="https://github.com/LucasBassetti/react-css-loaders"
                target="_blank"
                rel="noopener noreferrer"
              >
                React CSS Loaders
              </a>
              . I’m also a volunteer of{' '}
              <a
                href="https://institutoelevar.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instituto Elevar
              </a>
              , a NGO whose goal is promote and foster the dream of college
              students who are full of talent and potential, through educational
              policies and individualized mentorship from global professionals.
            </p>
            <p>
              In my free times I like travel, watch series, play video-game and,
              of course, play football (soccer). I cultivate friendship. I have
              very good friends and I love spend time with them. My two passions
              are my fiancee Juliana and my cat Simba that loves make pair
              programming with me 😽.
            </p>
            <S.ProfilePeopleImg fluid={aboutImage.childImageSharp.fluid} />
          </>
        ) : (
          <p>
            I'm a Mobile and Front-end Developer that loves open source and
            discovering new technologies. I have been working with web since
            2011. Currently I’m Front-end Developer at{' '}
            <a
              href="https://yachtlife.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              YachtLife
            </a>
            , the #1 Yacht Brokerage Company.
          </p>
        )}
      </S.ProfileIntroText>
    </S.ProfileIntroWrapper>
  )
}

export default ProfileIntro
