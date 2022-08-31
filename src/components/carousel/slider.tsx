import React, { FC, useState, useEffect } from 'react';
import { ImageContainer } from './slider.styles';

export type SliderImages = {
  key: string;
  webpHref: string;
  fallbackHref: string;
  alt?: string;
}[];

interface SliderProps {
  images: SliderImages;
}

export const Slider: FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => {
        const maxImages = images.length;
        const nextImageIndex = current >= maxImages - 1 ? 0 : current + 1;

        return nextImageIndex;
      });
    }, 3500);

    return () => {
      clearInterval(timer);
    };
  }, [images]);

  if (!images.length || images.length < 3) {
    return;
  }

  const previousImage = images[currentIndex === 0 ? images.length - 1 : currentIndex - 1];
  const currentImage = images[currentIndex];
  const nextImage = images[currentIndex >= images.length - 1 ? 0 : currentIndex + 1];

  return (
    <>
      <ImageContainer key={previousImage?.key} visible={false} data-name={previousImage?.key}>
        <picture>
          <source srcSet={previousImage?.webpHref} type="image/webp" />
          <source srcSet={previousImage?.fallbackHref} type="image/jpeg" />
          <img src={previousImage?.fallbackHref} alt={previousImage?.alt ?? ''} />
        </picture>
      </ImageContainer>
      <ImageContainer key={currentImage?.key} visible={true} data-name={currentImage?.key}>
        <picture>
          <source srcSet={currentImage?.webpHref} type="image/webp" />
          <source srcSet={currentImage?.fallbackHref} type="image/jpeg" />
          <img src={currentImage?.fallbackHref} alt={currentImage?.alt ?? ''} />
        </picture>
      </ImageContainer>
      <ImageContainer key={nextImage?.key} visible={false} data-name={nextImage?.key}>
        <picture>
          <source srcSet={nextImage?.webpHref} type="image/webp" />
          <source srcSet={nextImage?.fallbackHref} type="image/jpeg" />
          <img src={nextImage?.fallbackHref} alt={nextImage?.alt ?? ''} />
        </picture>
      </ImageContainer>
    </>
  );
};
