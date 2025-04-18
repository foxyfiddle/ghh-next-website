'use client';

import React, { useState } from 'react';

interface HoverableButtonProps {
  text: string;
  className?: string; // Optional additional CSS classes
  style?: React.CSSProperties; // Inline styles
}

function HoverableButton({ text, className, style }: HoverableButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const dynamicStyle = {
    ...style,
    backgroundColor: isHovered ? '#444444' : style?.backgroundColor, // Darker background on hover
    color: isHovered ? '#FFD700' : style?.color, // Gold text on hover
  };

  return (
    <button
      className={className}
      style={dynamicStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </button>
  );
}

export default HoverableButton;