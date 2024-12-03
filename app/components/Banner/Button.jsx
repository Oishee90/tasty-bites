'use client';
import React, { useState } from 'react';
import { gsap } from 'gsap';

const Button = () => {
  const [direction, setDirection] = useState('');

  const handleMouseEnter = (e) => {
    const target1 = e.target;
    const { clientX, clientY, target } = e;
    const { left, top, width, height } = target.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    let newDirection = '';

    // Determine hover direction
    if (x < width / 2 && y < height / 2) {
      newDirection = 'top';
    } else if (x < width / 2 && y >= height / 2) {
      newDirection = 'left';
    } else if (x >= width / 2 && y < height / 2) {
      newDirection = 'right';
    } else {
      newDirection = 'bottom';
    }

    setDirection(newDirection);

    // GSAP animation for flipping based on direction
    gsap.to(target, {
      rotationX: newDirection === 'top' ? -15 : newDirection === 'bottom' ? 15 : 0,
      rotationY: newDirection === 'left' ? -15 : newDirection === 'right' ? 15 : 0,
      y: newDirection === 'top' ? -10 : newDirection === 'bottom' ? 10 : 0,
      x: newDirection === 'left' ? -10 : newDirection === 'right' ? 10 : 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (e) => {
    const target = e.target;

    // Reset button position and rotation
    gsap.to(target, {
      rotationX: 0,
      rotationY: 0,
      x: 0,
      y: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <div>
    <button
      className="relative px-8 py-3 border-2 border-transparent rounded-lg bg-gray-900 text-white overflow-hidden group transform transition-all duration-500 ease-out hover:translate-x-4 hover:translate-y-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="relative z-10">Hover Me</span>

      {/* Color fill from bottom-left corner */}
      <span className="absolute inset-0 bg-blue-500 transform scale-x-0 scale-y-0 origin-bottom-left group-hover:scale-x-100 group-hover:scale-y-100 transition-transform duration-500 ease-out"></span>
    </button>
    {/* 1 */}
<button className="relative px-8 py-3 border-2 border-transparent rounded-lg bg-gray-900 text-white overflow-hidden group">
  <span className="relative z-10">Hover Me</span>
  
  {/* Fast Color Fill from left corner */}
  <span className="absolute inset-0 bg-blue-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
</button>
{/* 2 */}
<button className="relative px-8 py-3 border-2 border-transparent rounded-lg bg-gray-900 text-white overflow-hidden group">
  <span className="relative z-10">Hover Me</span>
  
  {/* Color fill from top-left corner */}
  <span className="absolute inset-0 bg-blue-500 transform scale-x-0 scale-y-0 origin-top-left group-hover:scale-x-100 group-hover:scale-y-100 transition-transform duration-500 ease-out"></span>
</button>
{/* 3 */}
<button className="relative px-8 py-3 border-2 border-transparent rounded-lg bg-gray-900 text-white overflow-hidden group">
  <span className="relative z-10">Hover Me</span>
  
  {/* Color fill from bottom-left corner */}
  <span className="absolute inset-0 bg-blue-500 transform scale-x-0 scale-y-0 origin-bottom-left group-hover:scale-x-100 group-hover:scale-y-100 transition-transform duration-500 ease-out"></span>
</button>
{/* 4 */}
<button className="relative px-8 py-3 border-2 border-transparent rounded-lg bg-gray-900 text-white overflow-hidden group transform transition-all duration-500 ease-out hover:translate-x-4 hover:translate-y-2">
  <span className="relative z-10">Hover Me</span>
  
  {/* Color fill from bottom-left corner */}
  <span className="absolute inset-0 bg-blue-500 transform scale-x-0 scale-y-0 origin-bottom-left group-hover:scale-x-100 group-hover:scale-y-100 transition-transform duration-500 ease-out"></span>
</button>
{/* 5 */}
<button className="relative px-8 py-3 border-2 border-transparent rounded-lg bg-gray-900 text-white overflow-hidden group">
  <span className="relative z-10">Hover Me</span>

  {/* Color fill from hover direction */}
  <span className="absolute inset-0 bg-blue-500 transform scale-x-0 scale-y-0 origin-[top-left] group-hover:scale-x-100 group-hover:scale-y-100 group-hover:origin-[top-left] group-hover:transition-transform duration-500 ease-out"></span>

  {/* Hover move effect based on direction */}
  <span className="absolute inset-0 group-hover:transition-all group-hover:duration-500 group-hover:ease-out 
    group-hover:translate-x-0 group-hover:translate-y-0
    group-hover:left-[-5px] group-hover:top-[-5px] group-hover:right-[-5px] group-hover:bottom-[-5px]">
  </span>
</button>
    </div>
  );
};

export default Button;
