interface CardProps {
  h2Text: string;
  pText: string;
  src: string;
  alt: string;
  div1ClassName?: string; // Optional additional CSS classes
  div2ClassName?: string; // Optional additional CSS classes
  h2ClassName?: string; // Optional additional CSS classes
}

function Card({
  h2Text,
  pText,
  src,
  alt,
  div1ClassName,
  div2ClassName,
  h2ClassName,
}: CardProps) {
  return (
    <div className={div1ClassName}>
      <img src={src} alt={alt} className="w-full rounded-t-lg" />
      <div className={div2ClassName}>
        <h2 className={h2ClassName}>{h2Text}</h2>
        {/* Render pText with HTML */}
        <p dangerouslySetInnerHTML={{ __html: pText }} />
      </div>
    </div>
  );
}

export default Card;
