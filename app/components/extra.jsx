'use client';
import { useEffect, useRef, useState } from "react";


const extra = () => {
    // const [origin, setOrigin] = useState("center center");
    // const [position, setPosition] = useState({ x: 0, y: 0 });
    // const [direction, setDirection] = useState('');
  
    const handleMouseEnter1 = (e) => {
      const { clientX, clientY, target } = e;
      const { left, top, width, height } = target.getBoundingClientRect();
  
      const x = clientX - left;
      const y = clientY - top;
  
      // Calculate the direction of hover
      if (x < width / 2 && y < height / 2) {
        setDirection('top-left');
      } else if (x > width / 2 && y < height / 2) {
        setDirection('top-right');
      } else if (x < width / 2 && y > height / 2) {
        setDirection('bottom-left');
      } else {
        setDirection('bottom-right');
      }
    };
  
    const handleMouseLeave3 = () => {
      setDirection('');
    };
    const handleMouseMove = (e) => {
      const { clientX, clientY, target } = e;
      const { left, top, width, height } = target.getBoundingClientRect();
      
      // Calculate the position of the mouse relative to the button
      const offsetX = clientX - left;
      const offsetY = clientY - top;
  
      setPosition({ x: offsetX, y: offsetY });
    };
  
    const handleMouseLeave2 = () => {
      setPosition({ x: 0, y: 0 });
    };
  
    const handleMouseEnter = (e) => {
      const { clientX, clientY, target } = e;
      const { left, top, width, height } = target.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
  
      const horizontal = x < width / 2 ? "left" : "right";
      const vertical = y < height / 2 ? "top" : "bottom";
  
      setOrigin(`${horizontal} ${vertical}`);
    };
  
    const handleMouseLeave = () => {
      setOrigin("center center");
    };
    return (
        <div>
           <button
      className="relative px-8 py-3 border-2 border-transparent rounded-lg bg-gray-900 text-white overflow-hidden group transform transition-all duration-500 ease-out hover:translate-x-4 hover:translate-y-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="relative z-10">Hover Me</span>

      {/* Color fill with dynamic origin */}
      <span
        className="absolute inset-0 bg-blue-500 transform scale-x-0 scale-y-0 origin-center group-hover:scale-x-100 group-hover:scale-y-100 transition-transform duration-500 ease-out"
        style={{
          transformOrigin: origin,
        }}
      ></span>
    </button>
    <button
      className="relative px-8 py-3 border-2 border-transparent rounded-lg bg-gray-900 text-white overflow-hidden group transform transition-all duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="relative z-10">Hover Me</span>

      {/* Bounce effect color fill with dynamic origin */}
      <span
        className="absolute inset-0 bg-blue-500 transform scale-x-0 scale-y-0 origin-center group-hover:scale-x-100 group-hover:scale-y-100 transition-all duration-300 ease-out"
        style={{
          transformOrigin: origin,
        }}
      ></span>

      {/* Bounce animation for the button */}
      <style jsx>{`
        button:hover {
          animation: bounce 0.6s ease-out;
        }

        @keyframes bounce {
          0% {
            transform: translate(0, 0);
          }
          20% {
            transform: scale(1.1) translate(5px, -5px);
          }
          40% {
            transform: scale(1) translate(-5px, 5px);
          }
          60% {
            transform: scale(1.1) translate(4px, -4px);
          }
          80% {
            transform: scale(1) translate(-4px, 4px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </button>
    <button
      className="relative px-8 py-3 border-2 border-transparent rounded-lg bg-gray-900 text-white overflow-hidden group transform transition-all duration-300 ease-out"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave2}
    >
      <span className="relative z-10">Hover Me</span>

      {/* Color fill */}
      <span
        className="absolute inset-0 bg-blue-500 transform scale-x-0 scale-y-0 origin-center group-hover:scale-x-100 group-hover:scale-y-100 transition-all duration-300 ease-out"
        style={{
          transformOrigin: `${position.x}px ${position.y}px`, // Adjust fill direction
        }}
      ></span>

      {/* Button movement */}
      <style jsx>{`
        button {
          transition: transform 0.3s ease-out;
        }

        button:hover {
          transform: translate(
            ${position.x * 0.2}px, 
            ${position.y * 0.2}px
          ); /* Move in the direction of the hover */
        }
      `}</style>
    </button>
    <button
      className="relative px-8 py-3 border-2 border-transparent rounded-lg bg-gray-900 text-white overflow-hidden group"
      onMouseEnter={handleMouseEnter1}
      onMouseLeave={handleMouseLeave3}
    >
      <span className="relative z-10">Hover Me</span>

      {/* Button movement */}
      <span
        className={`absolute inset-0 bg-blue-500 transition-all duration-300 ease-out transform ${direction === 'top-left' ? 'translate-x-[-100%] translate-y-[-100%]' : ''}
          ${direction === 'top-right' ? 'translate-x-[100%] translate-y-[-100%]' : ''}
          ${direction === 'bottom-left' ? 'translate-x-[-100%] translate-y-[100%]' : ''}
          ${direction === 'bottom-right' ? 'translate-x-[100%] translate-y-[100%]' : ''}`}
      ></span>
    </button> 
        </div>
    );
};

export default extra;