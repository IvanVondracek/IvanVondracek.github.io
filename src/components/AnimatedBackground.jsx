// src/components/AnimatedBackground.jsx
import React, { useEffect, useState } from 'react';

export const AnimatedBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
      const handleMouseMove = (e) => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100
        });
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
  
    return (
        <div className="fixed inset-0" style={{ zIndex: 0 }}>
        {/* Gradientové pozadí - jemnější */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/40 to-blue-900/20" />
        
        <div 
        className="absolute inset-0 opacity-10 transition-transform duration-300"
        style={{
          backgroundImage: 'url("/images/background.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `translate(${-mousePosition.x / 50}px, ${-mousePosition.y / 50}px)`
        }}
      />

        {/* Tečky s menší průhledností */}
        <div className="absolute inset-0">
        <div className="absolute w-3 h-3 bg-blue-500/30 rounded-full animate-pulse-slow"
             style={{
                 top: '20%',
                 left: '10%',
                 filter: 'blur(4px)',
                 transform: `translate(${mousePosition.x / 10}px, ${mousePosition.y / 10}px)`,
                 transition: 'transform 0.3s ease-out'
               }} />
          <div className="absolute w-3 h-3 bg-purple-500/50 rounded-full animate-pulse-slow"
               style={{
                 top: '60%',
                 left: '80%',
                 filter: 'blur(4px)',
                 transform: `translate(${mousePosition.x / 15}px, ${mousePosition.y / 15}px)`,
                 transition: 'transform 0.3s ease-out'
               }} />
          <div className="absolute w-3 h-3 bg-cyan-500/50 rounded-full animate-pulse-slow"
               style={{
                 top: '40%',
                 left: '50%',
                 filter: 'blur(4px)',
                 transform: `translate(${mousePosition.x / 20}px, ${mousePosition.y / 20}px)`,
                 transition: 'transform 0.3s ease-out'
               }} />
        </div>
  
        {/* Mřížka s vyšší viditelností */}
        <div className="absolute inset-0"
             style={{
               backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.1) 1px, transparent 0)',
               backgroundSize: '50px 50px',
               transform: `translate(${-mousePosition.x / 50}px, ${-mousePosition.y / 50}px)`,
               transition: 'transform 0.3s ease-out'
             }} />
      </div>
    );
  };