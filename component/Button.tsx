'use client';

import React, { useState } from 'react';

interface ButtonProps {
  text: string;
  className?: string; // Optional additional CSS classes
}

function Button({ text, className }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

  return (  
    <button className={className}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
  {text}
  </button>
  )
}

export default Button;
