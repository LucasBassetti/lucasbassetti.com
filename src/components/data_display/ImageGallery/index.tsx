import React, { useEffect, useState } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

import * as S from './styled'

interface IProps {
  images?: any
}

const ImageGallery = ({ images }: IProps) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  useEffect(() => {
    const header = document.querySelector('header')

    if (header) {
      if (modalIsOpen) {
        header.style.display = 'none'
      } else {
        header.style.display = 'flex'
      }
    }
  }, [modalIsOpen])

  const onToggleModal = (index: number) => {
    setModalIsOpen(!modalIsOpen)
    setSelectedIndex(index)
  }

  return (
    <>
      <S.GalleryWrapper>
        {images.map(({ alt, source }: any, i: number) => (
          <S.GalleryImage
            onClick={() => onToggleModal(i)}
            role="button"
            style={{ display: 'inline-block', marginRight: 10, width: '33%' }}
            key={source}
            src={source}
            alt={alt || `Image #${i}`}
          />
        ))}
      </S.GalleryWrapper>
      {modalIsOpen && (
        <Lightbox
          mainSrc={images[selectedIndex].source}
          nextSrc={images[(selectedIndex + 1) % images.length].source}
          prevSrc={
            images[(selectedIndex + images.length - 1) % images.length].source
          }
          onCloseRequest={() => onToggleModal(0)}
          onMovePrevRequest={() =>
            setSelectedIndex(
              (selectedIndex + images.length - 1) % images.length
            )
          }
          onMoveNextRequest={() =>
            setSelectedIndex((selectedIndex + 1) % images.length)
          }
        />
      )}
    </>
  )
}

export default ImageGallery
