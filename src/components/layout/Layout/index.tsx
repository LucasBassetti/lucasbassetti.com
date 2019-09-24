import React from 'react'
import PropTypes from 'prop-types'
import { TransitionPortal } from 'gatsby-plugin-transition-link'
import GlobalStyles from '@styles/global'
import Header from '../Header'
import * as S from './styled'

interface IProps {
  children: React.ReactNode
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Header />
      </TransitionPortal>
      <S.LayoutWrapper>{children}</S.LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
