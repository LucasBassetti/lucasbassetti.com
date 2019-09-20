import React, { useState } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'

import * as S from './styled'

interface IProps {
  images?: any
}

const ImageGallery = ({ images }: IProps) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  const onToggleModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <div style={{ display: 'flex', overflowX: 'auto' }}>
      {images.map(({ source }: any) => (
        <img
          style={{ display: 'inline-block', marginRight: 10, width: '33%' }}
          key={source}
          src={source}
        />
      ))}
    </div>
  )
}

export default ImageGallery
