interface CardProps {
  h2Text: string;
  pText: string;
  src: string;
  alt: string;
  div1ClassName?: string; // Optional additional CSS classes
  div2ClassName?: string; // Optional additional CSS classes
  h2ClassName?: string; // Optional additional CSS classes
  overlayText?: string; // New prop for overlay text
}

function Card({
  h2Text,
  pText,
  src,
  alt,
  div1ClassName,
  div2ClassName,
  h2ClassName,
  overlayText, // New prop
}: CardProps) {
  return (
    <div className={div1ClassName}>
      {/* Image Wrapper with Relative Positioning */}
      <div className="relative">
        <img src={src} alt={alt} className="w-full rounded-t-lg" />
        {/* Overlay Text */}
        {overlayText && (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-2xl font-bold drop-shadow-lg text-center">
              {overlayText}
            </p>
          </div>
        )}
      </div>
      <div className={div2ClassName}>
        <h2 className={h2ClassName}>{h2Text}</h2>
        {/* Render pText with HTML */}
        <p dangerouslySetInnerHTML={{ __html: pText }} />
      </div>
    </div>
  );
}

export default Card;
