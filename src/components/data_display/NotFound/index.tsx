import React from 'react'

import * as S from './styled'

const NotFound = () => (
  <S.NotFoundWrapper>
    <S.NotFoundTitle>Oops...</S.NotFoundTitle>
    <S.NotFoundDescription>
      You just hit a route that doesn&#39;t exist... the sadness. Here are some
      helpful links instead:
    </S.NotFoundDescription>
  </S.NotFoundWrapper>
)

export default NotFound
