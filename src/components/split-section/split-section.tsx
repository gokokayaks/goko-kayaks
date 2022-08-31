import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { Text } from '../text';
import { Section, ImageContainer, TextWrapper, TextContents, DescriptionWrapper } from './split-section.styles';

interface SplitSectionProps {
  webpHref?: string;
  fallbackHref: string;
  alt?: string;
  title: string;
  description: ReactElement;
  reverse?: boolean;
}

export const SplitSection: FC<SplitSectionProps> = ({
  webpHref,
  fallbackHref,
  alt = '',
  title,
  description,
  reverse,
}) => {
  const sectionRef = useRef(null);
  const [isTextVisible, setTextVisible] = useState(null);

  const callback = (entries) => {
    const [entry] = entries;

    setTextVisible((state: boolean) => {
      if (state !== true) {
        return entry.isIntersecting;
      }
      return true;
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px',
      threshold: 0.6,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const image = (
    <ImageContainer>
      <picture>
        <source srcSet={webpHref} type="image/webp" />
        <source srcSet={fallbackHref} type="image/jpeg" />
        <img src={fallbackHref} alt={alt} />
      </picture>
    </ImageContainer>
  );

  const text = (
    <TextWrapper ref={sectionRef}>
      <TextContents isTextVisible={isTextVisible} reverse={reverse}>
        <Text type="subHeading" color="blueDark">
          {title}
        </Text>
        <DescriptionWrapper>{description}</DescriptionWrapper>
      </TextContents>
    </TextWrapper>
  );

  if (reverse) {
    return (
      <Section>
        {text}
        {image}
      </Section>
    );
  }

  return (
    <Section>
      {image}
      {text}
    </Section>
  );
};
