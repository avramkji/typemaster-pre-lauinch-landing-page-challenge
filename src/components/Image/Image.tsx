import './Image.css';

interface ImageProps {
  src: string;
  alt: string;
  imageSize?: "large" | "medium" | "small";
  overlayColor?: string;
}

const Image = ({ src, alt, imageSize = 'large', overlayColor }: ImageProps) => {
  const imageClasses = `Image Image-${imageSize.charAt(0).toUpperCase()+imageSize.slice(1)}`

  return (
    <img className={imageClasses} src={src} alt={alt} />
  );
};

export default Image;
