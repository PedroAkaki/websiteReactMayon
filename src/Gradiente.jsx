import React from 'react';

const AnimatedGradientSVG = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-32 h-32">
      <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FDA51C" />
        <stop offset="100%" stopColor="#E33F19" />
      </linearGradient>
      <path
        d="M10 10 L 90 90"
        stroke="url(#gradient)"
        strokeWidth="20"
        strokeLinecap="round"
        className="animate-flow"
      />
    </svg>
  );
};

export default AnimatedGradientSVG;

