import React from 'react';

export const BackgroundPattern = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-full h-full">
      {/* Circuit patterns */}
      <path d="M100 100 L200 100 L200 200 L300 200" stroke="#444" fill="none" strokeWidth="2"/>
      <path d="M400 300 Q450 350 500 300 T600 300" stroke="#555" fill="none" strokeWidth="2"/>
      
      {/* 3D Printer stylized icon */}
      <g transform="translate(600,200) scale(0.8)">
        <rect x="0" y="0" width="100" height="120" fill="none" stroke="#666" strokeWidth="2"/>
        <path d="M20 20 L50 50 L80 20" fill="none" stroke="#666" strokeWidth="2"/>
        <rect x="35" y="60" width="30" height="30" fill="#666"/>
      </g>
      
      {/* Abstract code symbols */}
      <g transform="translate(100,400)">
        <text x="0" y="0" fill="#444" fontFamily="monospace" fontSize="14">
          {'</>'}
        </text>
      </g>
      
      {/* Arduino-like board */}
      <g transform="translate(200,300)">
        <rect x="0" y="0" width="80" height="120" rx="5" fill="none" stroke="#555" strokeWidth="2"/>
        <circle cx="20" cy="20" r="5" fill="#666"/>
        <circle cx="60" cy="20" r="5" fill="#666"/>
        <rect x="10" y="40" width="60" height="70" fill="none" stroke="#555" strokeWidth="1"/>
      </g>
      
      {/* Decorative dots pattern */}
      <g>
        <circle cx="50" cy="50" r="2" fill="#444"/>
        <circle cx="70" cy="50" r="2" fill="#444"/>
        <circle cx="90" cy="50" r="2" fill="#444"/>
      </g>
    </svg>
  );
};