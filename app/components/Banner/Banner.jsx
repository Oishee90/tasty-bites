"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
const Banner = () => {
  useEffect(() => {
    
    // GSAP Animation for SVG Path
    gsap.to(".curved-path", {
      duration: 4,
      repeat: -1,
      yoyo: true,
      attr: {
        d: "M0,180 C 200,220, 400,230, 600,210 C 800,180, 1000,240, 1200,210 C 1400,160, 1600,190, 1600,190 L 1600,320 L 0,320 Z",
      },
    });
  }, []);

  useEffect(() => {
     
    // GSAP Animation for burger layers (Bottom to Top)
    const timeline = gsap.timeline();
    timeline.fromTo(
      ".content",
      { x: -300, opacity: 0 }, // Start off-screen to the left
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" } // Animate to visible position
    );
  
    timeline.fromTo(
      ".card",
      { x: 300, opacity: 0 }, // Start off-screen to the left
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" } // Animate to visible position
    );
  
    timeline
      .fromTo(
        ".layer-4",
        { opacity: 0, y: -200 },
        { opacity: 1, y: 0, duration: 0.8 }
      ) // Bottom Bun
      .fromTo(
        ".layer-3",
        { opacity: 0, y: -200 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      ) // Patty
      .fromTo(
        ".layer-2",
        { opacity: 0, y: -200 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      ) // Lettuce
      .fromTo(
        ".layer-1",
        { opacity: 0, y: -200 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      ) // Top Bun
 


      .to(".burger-container", { y: 20, repeat: -1, yoyo: true, duration: 1 }); // Floating effect


  }, []);

  return (
    <div className="relative border-white border">
      {/* Banner Section with Yellow Background */}
      <div className="bg-yellow-400 h-[600px] md:h-[600px] flex flex-col-reverse md:flex-row justify-between items-start">
        {/* Content Section */}
        <div className="md:content w-full text-center md:text-left md:w-1/2 px-6 md:mt-32 mt-5">
  {/* Badge */}
  <span className="mt-2 whitespace-nowrap text-left rounded-full bg-green-500 px-3 py-1 text-sm text-white">
    New Menu
  </span>

  <h1 className="text-2xl w-full md:text-6xl font-bold text-black dark:text-gray-100">
  <span className="text-[#E22626]">TastyBites  </span><br />
      <span className="inline-block">
        <Typewriter
          words={['Awaits Your Cravings!']}
          loop={false} // Runs only once
          cursor
          cursorStyle="|"
          typeSpeed={70} // Typing speed
          deleteSpeed={50} // Deleting speed
          delaySpeed={1000} // Delay before re-typing
        />
      </span>
  </h1>
  <p className="text-base md:text-xl mt-2 text-white dark:text-gray-300">
    Unleash the Chef in You with Our Latest Dishes.
  </p>

  {/* Button */}
{/* Base Button */}
<div className="mt-2 mb-5 cursor-pointer">
<button
  type="button"
  className="p-2 btn md:px-6 md:py-3 lg:px-8 lg:py-4 font-semibold text-sm md:text-xl   rounded-xl bg-[#E22626] hover:cursor-pointer  dark:border-green-800 text-gray-100 dark:text-gray-800"
>
 Order Now
</button>
</div>





</div>

<div className="flex flex-row">
        {/* Burger Animation Section */}
        <div className="burger-container hidden   relative w-[400px] h-[300px] md:w-[600px] md:h-[500px]  md:mt-10 lg:flex justify-center mr-5">
  {/* Bottom Bun */}
  <div></div>
  <Image
    src="/images/layer-4.png"
    alt="Bottom Bun"
    className="layer layer-4 absolute top-[240px]"
    layout="intrinsic"
    width={270}
    height={50}
    priority
  />

  {/* Patty */}
  <Image
    src="/images/layer-3.png"
    alt="Patty"
    className="layer layer-3 absolute top-[200px]"
    layout="intrinsic"
    width={250}
    height={50}
    priority
  />

  {/* Lettuce */}
  <Image
    src="/images/layer-2.png"
    alt="Lettuce"
    className="layer layer-2 absolute top-[150px]"
    layout="intrinsic"
    width={300}
    height={50}
    priority
  />

  {/* Top Bun */}
  <Image
    src="/images/layer-1.png"
    alt="Top Bun"
    className="layer layer-1 absolute top-[100px]"
    layout="intrinsic"
    width={300}
    height={50}
    priority
  />
  {/* card */}
   {/* Cards - Positioned on the right side */}
 
</div>
<div className="nutrition pl-4 card  absolute right-0 mt-24 flex flex-col gap-6 md:gap-3 items-center">
    <div className="calories card-1 bg-white p-2 rounded-l-lg  text-center w-[120px] md:w-[150px] transform transition-transform duration-300 hover:scale-105">
      <h3 className="text-lg font-semibold text-gray-700">Calories</h3>
      <small className="block text-sm text-gray-500">Kcal</small>
      <span className="block text-2xl font-bold text-[#E22626] mt-2">1370</span>
    </div>

    <div className="calories card-2 bg-white p-2 rounded-l-lg  text-center w-[120px] md:w-[150px] transform transition-transform duration-300 hover:scale-105">
      <h3 className="text-lg font-semibold text-gray-700">Fat</h3>
      <small className="block text-sm text-gray-500">g</small>
      <span className="block text-2xl font-bold text-[#FFB700] mt-2">93</span>
    </div>

    <div className="calories card-3 bg-white p-2 rounded-l-lg  text-center w-[120px] md:w-[150px] transform transition-transform duration-300 hover:scale-105">
      <h3 className="text-lg font-semibold text-gray-700">Protein</h3>
      <small className="block text-sm text-gray-500">g</small>
      <span className="block text-2xl font-bold text-[#007BFF] mt-2">85</span>
    </div>
  </div>
  </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
  <svg
    className="w-full" 
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 240" 
  >
    <path
      className="curved-path"
      fill="#FFFFFF"
      d="M0,160 C 200,200, 400,250, 600,220 C 800,190, 1000,260, 1200,200 C 1400,140, 1600,210, 1600,210 L 1600,240 L 0,240 Z" 
    
    ></path>
  </svg>
</div>


    </div>
  );
};

export default Banner;
