import React, { useEffect, useState, FC, PropsWithChildren } from 'react';
import { ChildrenContainer, Section, ImageContainer, Overlay } from './carousel.styles';
import { Slider, SliderImages } from './slider';
import { CarouselImages } from './types';

interface CarouselProps {
  images: CarouselImages;
}

export const Carousel: FC<PropsWithChildren<CarouselProps>> = ({ children, images }) => {
  const [carouselImages, setCarouselImages] = useState<SliderImages | []>([]);

  useEffect(() => {
    const transformedImages = Object.entries(images).map(([imageName, imageValue]) => {
      return {
        ...imageValue,
        key: imageName,
      };
    });

    setCarouselImages(transformedImages);
  }, [images]);

  return (
    <Section>
      <Slider images={carouselImages} />
      <Overlay />
      <ChildrenContainer>{children}</ChildrenContainer>
    </Section>
  );
};
