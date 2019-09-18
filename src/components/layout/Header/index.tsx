import React, { useEffect, useRef, RefObject } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Headroom from 'headroom.js'
import Img from 'gatsby-image'
import { LinkedinSquare as LinkedIn } from 'styled-icons/boxicons-logos/LinkedinSquare'
import { Instagram } from 'styled-icons/boxicons-logos/Instagram'
import { Github } from 'styled-icons/boxicons-logos/Github'
import { getActiveTheme } from '@utils/themes'
import socialLinks from '@constants/social_links'
import LogoIcon from '@components/icons/LogoIcon'
import ThemeSwitch from '../ThemeSwitch'
import * as S from './styled'

const Header = () => {
  const header = useRef<HTMLElement>(null)
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "images/general/profile.jpeg" }) {
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
    if (header.current) {
      const headroom = new Headroom(header.current, {
        offset: 100,
        tolerance: {
          up: 20,
          down: 10,
        },
      })

      headroom.init()
    }
  }, [header.current])

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
        <S.HeaderLogo
          to="/"
          bg={getActiveTheme()}
          cover={true}
          direction="down"
        >
          <LogoIcon size={20} />
          <S.HeaderProfileWrapper>
            <Img fixed={avatarImage.childImageSharp.fixed} />
          </S.HeaderProfileWrapper>
        </S.HeaderLogo>
        <ThemeSwitch />
      </S.HeaderBlock>
      <S.HeaderNavBlock>
        {links.map(({ label, url }) => (
          <S.HeaderLink
            key={url}
            to={url}
            bg={getActiveTheme()}
            cover={true}
            direction="down"
            activeClassName="active"
          >
            {label}
          </S.HeaderLink>
        ))}
      </S.HeaderNavBlock>
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
