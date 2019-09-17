import React, { useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Headroom from 'headroom.js'
import Img from 'gatsby-image'
import { LinkedinSquare as LinkedIn } from 'styled-icons/boxicons-logos/LinkedinSquare'
import { Instagram } from 'styled-icons/boxicons-logos/Instagram'
import { Github } from 'styled-icons/boxicons-logos/Github'
import ThemeSwitch from '../ThemeSwitch'
import socialLinks from '../../../constants/social_links'
import LogoIcon from '../../icons/LogoIcon'
import * as S from './styled'

const Header = () => {
  const header = useRef<any>()

  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "general/profile.jpeg" }) {
          childImageSharp {
            fixed(width: 36, height: 36) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  useEffect(() => {
    const header = document.querySelector('header')
    const headroom = new Headroom(header, {
      offset: 100,
      tolerance: {
        up: 20,
        down: 10,
      },
    })

    headroom.init()
  }, [])

  const Icons = {
    Github,
    LinkedIn,
    Instagram,
  }

  const links = [
    { label: 'Articles', url: '/blog/' },
    { label: 'Projects', url: '/projects/' },
    { label: 'Porfolio', url: '/porfolio/' },
    { label: 'About', url: '/about/' },
  ]

  return (
    <S.HeaderWrapper ref={header}>
      <S.HeaderBlock>
        <S.HeaderLogo to="/" onMouseOver={() => {}}>
          <LogoIcon size={20} />
          <S.HeaderProfileWrapper>
            <Img fixed={avatarImage.childImageSharp.fixed} />
          </S.HeaderProfileWrapper>
        </S.HeaderLogo>
        <ThemeSwitch />
      </S.HeaderBlock>
      <S.HeaderBlock>
        {links.map(({ label, url }) => (
          <S.HeaderLink key={url} to={url} activeClassName="active">
            {label}
          </S.HeaderLink>
        ))}
      </S.HeaderBlock>
      <S.HeaderBlock>
        {socialLinks.map(({ label, url }) => {
          const Icon = Icons[label]

          return (
            <S.HeaderSocialLink key={label} href={url} target="_blank">
              <Icon size={32} />
            </S.HeaderSocialLink>
          )
        })}
      </S.HeaderBlock>
    </S.HeaderWrapper>
  )
}

export default Header
