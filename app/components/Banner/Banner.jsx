"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

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
      .to(".burger-container", { scale: 1.1, repeat: -1, yoyo: true, duration: 1 });




  }, []);

  return (
    <div className="relative border-white border">
      {/* Banner Section with Yellow Background */}
      <div className="bg-yellow-400 h-[500px] flex flex-col md:flex-row justify-between items-center">
        {/* Content Section */}
        <div className="text-left md:w-1/2 px-6">
          <h1 className="text-4xl font-bold text-white">
            Welcome to Our Cooking Website
          </h1>
          <p className="text-lg text-white mt-4">
            Explore delicious recipes and more!
          </p>
        </div>

        {/* Burger Animation Section */}
        <div className="burger-container relative w-[200px] h-[300px] md:w-[600px] md:h-[500px] mt-7 md:mt-0 flex justify-center">
  {/* Bottom Bun */}
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
</div>

      </div>

      {/* Diagonal Wave Bottom using SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            className="curved-path"
            fill="#FFFFFF"
            d="M0,160 C 200,200, 400,250, 600,220 C 800,190, 1000,260, 1200,200 C 1400,140, 1600,210, 1600,210 L 1600,320 L 0,320 Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Banner;
