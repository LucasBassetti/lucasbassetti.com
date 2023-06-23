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
        <S.ProfileIntroName>Hi, I am Lucas!</S.ProfileIntroName>
        {full ? (
          <>
            <p>
              I am a Software Engineer with 6+ years experience in remote work
              and 10+ years with web technologies. I'm fast-learner that loves
              working with open source and discovering new technologies.
            </p>
            <p>
              I graduated in Computer Science in 2014 and got my Master’s degree
              in 2017, both by the Universidade Federal do Espírito Santo
              (UFES). My graduation final project and Master thesis contributed
              to improve the quality of public data from Brazilian government
              using semantic interoperability and semantic web techniques. My
              final project was a finalist at the Final Project Award in
              Bachelor’s Degree of Information Technology Area by SINDINFO.
            </p>
            <p>
              Since I have started to work remotely, I have been in companies
              from the USA, Brazil, Switzerland and London and worked with
              different technologies such as React, React Native, Redux,
              TypeScript, Gatsby, NodeJS, Firebase, MeteorJS, MongoDB and MySQL.
              At the moment, I am a Senior Software Engineer at X-Team.
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
              . I am also a volunteer of{' '}
              <a
                href="https://institutoelevar.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instituto Elevar
              </a>
              , an NGO that aims at promoting and fostering the dreams of
              college students who are full of talent and potential, through
              educational policies and individualized mentorship from global
              professionals.
            </p>
            <p>
              In my free times I like travel, watch series, play video-game and,
              of course, play football (soccer). I cultivate and invest in
              friendship. I have very good friends and I love spending time with
              them. My two greatest passions are my wife Juliana and my cats
              Simba and Nala, who loves make pair programming with me 😽.
            </p>
            <S.ProfilePeopleImg fluid={aboutImage.childImageSharp.fluid} />
          </>
        ) : (
          <p>
            I am a Software Engineer with 8+ years experience in remote work and
            12+ years with web technologies. I am fast-learner that loves
            working with open source and discovering new technologies. Currently
            working at{' '}
            <a
              href="https://www.scope3.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scope3
            </a>
            .
          </p>
        )}
      </S.ProfileIntroText>
    </S.ProfileIntroWrapper>
  )
}

export default ProfileIntro
