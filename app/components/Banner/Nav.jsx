"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // GSAP color transition animation
    gsap.to(".animated-word", {
      color: "#E22626", // Target color
      stagger: 0.2, // Delay between each letter
      duration: 1.5, // Duration of the color change
      repeat: -1, // Infinite loop
      yoyo: true, // Reverse the animation
      ease: "power1.inOut", // Smooth transition
    }); }, []);
 

  return (
 
        <nav className=" top-0 left-0 right-0 z-10 fixed bg-opacity-30 dark:bg-gray-800">
          <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
            <a href="#" className=" pacifico-regular  lg:text-4xl md:text-3xl text-2xl text-black font-extrabold flex">
           
            {/* Wrap each letter in a span */}
            {["T","a","s","t","y","B","i","t","e","s"].map((letter, index) => (
              <span key={index} className="animated-word mr-1">
                {letter}
              </span>
            ))}
          </a>
              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
    
            {/* Mobile Menu */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
                isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
              }`}
            >
              <div className="flex flex-col text-xl font-medium md:flex-row md:mx-6">
                <a
                  href="#"
                  className="my-2 text-[#3f3f3f] transition-colors duration-300 transform dark:text-gray-200 hover:text-black dark:hover:text-green-400 md:mx-4 md:my-0"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="my-2 text-xl  text-[#3f3f3f]   transition-colors duration-300 transform dark:text-gray-200 hover:text-black dark:hover:text-green-400 md:mx-4 md:my-0"
                >
                  Shop
                </a>
                <a
                  href="#"
                  className="my-2 text-[#3f3f3f]   transition-colors duration-300 transform dark:text-gray-200 hover:text-black dark:hover:text-green-400 md:mx-4 md:my-0"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="my-2 text-[#3f3f3f]  transition-colors duration-300 transform dark:text-gray-200 hover:text-black dark:hover:text-green-400 md:mx-4 md:my-0"
                >
                  About
                </a>
              </div>
    
              <div className="flex justify-center md:block">
                <a
                  href="#"
                  className="relative text-[#3f3f3f] transition-colors duration-300 transform hover:text-green-500 dark:hover:text-green-400 dark:text-gray-200 "
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="absolute top-0 left-0 p-1 text-xs text-white bg-green-500 rounded-full"></span>
                </a>
              </div>
            </div>
          </div>
        </nav>
  
    
  );
};

export default Navbar;
