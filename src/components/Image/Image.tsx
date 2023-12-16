import './Image.css';

interface ImageProps {
  src: string;
  alt: string;
  imageSize?: "large" | "medium" | "small";
  overlayColor?: boolean;
}

const Image = ({ src, alt, imageSize = 'large', overlayColor }: ImageProps) => {
  const imageClasses = `Image Image-${imageSize.charAt(0).toUpperCase()+imageSize.slice(1)}`

  return (
    <div>
      <div
        className={imageClasses}
      >
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default Image;
