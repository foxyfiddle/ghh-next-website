interface ImageProps {
    src: string; // The source URL of the image
    alt: string; // The alt text for accessibility
    width?: number; // Optional width of the image
    height?: number; // Optional height of the image
    className?: string; // Optional additional CSS classes
  }
  
  function Image({ src, alt, width, height, className }: ImageProps) {
    return (
      <div>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      </div>
    );
  }
  
  export default Image;