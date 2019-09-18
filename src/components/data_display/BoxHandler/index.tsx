import React from 'react'

import * as S from './styled'

interface IProps {
  children: React.ReactNode
}

const BoxHandler = ({ children }: IProps) => {
  return <S.BoxHandler>{children}</S.BoxHandler>
}

export default BoxHandler
