"use client";
import React from 'react';

const Banner = () => {
  return (
    <div className=' relative border-white border '>
      {/* Banner Section with Yellow Background */}
      <div className=" bg-yellow-400 h-[500px]  border-0 flex flex-col justify-center items-center">
       <div className='flex md:flex-row flex-col justify-between'>
     <div className='text-right'>
     <h1 className="text-4xl font-bold text-white text-center">Welcome to Our Cooking Website</h1>
     <p className="text-lg text-white text-center mt-4">Explore delicious recipes and more!</p>
        </div>
      {/* image part */}
      <div className=''> 

      </div>
        </div>
        {/* Diagonal Wave Bottom using SVG */}
        
      </div>
      <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          {/* <path fill="#00712D" d="M0,320L0,260Q360,200,720,260T1440,320Z"></path> */}
          {/* <path fill="#00712D" d="M0,320L0,240L720,120L1440,240L1440,320Z"></path> */}
         

          <path className="curved-path" fill="#FFFFFF" d="M0,160 C 200,200, 400,250, 600,220 C 800,190, 1000,260, 1200,200 C 1400,140, 1600,210, 1600,210 L 1600,320 L 0,320 Z"></path>
          </svg>
        </div>
           {/* CSS for the animation */}
           <style jsx>{`
        .curved-path {
          animation: curveMove 4s ease-in-out infinite;
        }

        @keyframes curveMove {
          0% {
            d: path("M0,160 C 200,200, 400,250, 600,220 C 800,190, 1000,260, 1200,200 C 1400,140, 1600,210, 1600,210 L 1600,320 L 0,320 Z");
          }
          50% {
            d: path("M0,180 C 200,220, 400,230, 600,210 C 800,180, 1000,240, 1200,210 C 1400,160, 1600,190, 1600,190 L 1600,320 L 0,320 Z");
          }
          100% {
            d: path("M0,160 C 200,200, 400,250, 600,220 C 800,190, 1000,260, 1200,200 C 1400,140, 1600,210, 1600,210 L 1600,320 L 0,320 Z");
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
