import React, { FC } from 'react';

interface ImageProps {
  webp: string;
  fallback: string;
  alt: string;
  className?: string;
}

export const Image: FC<ImageProps> = ({ webp, fallback, alt, className }) => {
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <source srcSet={fallback} type="image/jpeg" />
      <img src={fallback} alt={alt} className={className} />
    </picture>
  );
};
