import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  size: {
    ratio: string;
    width: number;
    height: number;
  };
}

const Image: React.FC<ImageProps> = ({ src, alt, size }) => {
  return (
    <picture>
      <source
        media={`(aspect-ratio: ${size.ratio})`}
        srcSet={`${src}?w=${size.width}&h=${size.height}`}
      />
      <img src={`${src}?w=${size.width}&h=${size.height}`} alt={alt} />
    </picture>
  );
};

export default Image;
