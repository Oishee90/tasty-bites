"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { TbShoppingCartPlus } from "react-icons/tb";
import Image from 'next/image';
const Shop = () => {
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 2.5,
              spacing: 32,
            },
          },
        },
      });
    
    return (
        <div>
             <section className="bg-gray-50">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:py-16 lg:px-8 xl:py-24">
        <div className="max-w-7xl items-end justify-between sm:flex sm:pr-6 lg:pr-8">
          <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>
          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              onClick={() => instanceRef.current?.prev()}
              className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
              {/* Previous Icon */}
              &lt;
            </button>
            <button
              aria-label="Next slide"
              onClick={() => instanceRef.current?.next()}
              className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
              {/* Next Icon */}
              &gt;
            </button>
          </div>
        </div>
        <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
          <div ref={sliderRef} className="keen-slider grid grid-cols-1 lg:grid-cols-3 gap-6 py-10 px-2">
          <div className="w-full max-w-sm overflow-hidden bg-red-50 hover:bg-white  rounded-2xl shadow-lg dark:bg-gray-800 group">
      <div className="relative overflow-hidden">
        <Image
          src="/images/fresh-vegetable-salad-with-grilled-chicken-breast.jpg" 
          alt="Sample"
          width={400}
          height={300}
          className="object-cover object-center w-full h-56 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="flex items-center px-6 py-3 bg-red-700 ">
      <IoFastFoodOutline className="text-white text-xl " />
        <h1 className="mx-3 text-xl font-semibold text-white">Burger</h1>
      </div>

      <div className="px-6 py-4 ">
      <div className="flex items-center  justify-between ">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          Special Burger
        </h1>
      <FaRegHeart  className="text-xl hover:text-red-700 cursor-pointer"/>
    
      </div>
      <div className="flex mt-2 item-center">
            <svg className="w-5 h-5 text-[#FB9300] fill-current dark:text-gray-300" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg className="w-5 h-5 text-[#FB9300] fill-current dark:text-gray-300" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg className="w-5 h-5 text-[#FB9300] fill-current dark:text-gray-300" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
        </div>
        <p className="py-2 text-gray-700 dark:text-gray-400">
          Full Stack maker & UI / UX Designer, love hip hop music Author of
          Building UI.
        </p>
        <div className="pb-5 flex items-center  justify-between">
            <h1 className="text-2xl text-red-600 font-bold">$80.20</h1>
            <div className="text-2xl bg-black px-2 py-2 rounded-lg">
          
            <TbShoppingCartPlus className="text-white" />
            </div>
        </div>
      </div>
    </div>
    <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 group">
      <div className="relative overflow-hidden">
        <Image
          src="/images/fresh-vegetable-salad-with-grilled-chicken-breast.jpg" 
          alt="Sample"
          width={400} 
          height={300} 
          className="object-cover object-center w-full h-56 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="flex items-center px-6 py-3 bg-gray-900">
        <svg
          aria-label="headphones icon"
          className="w-6 h-6 text-white fill-current"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
          />
        </svg>
        <h1 className="mx-3 text-lg font-semibold text-white">Focusing</h1>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          Patterson Johnson
        </h1>
        <p className="py-2 text-gray-700 dark:text-gray-400">
          Full Stack maker & UI / UX Designer, love hip hop music Author of
          Building UI.
        </p>
      </div>
    </div>
    <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 group">
      <div className="relative overflow-hidden">
        <Image
          src="/images/fresh-vegetable-salad-with-grilled-chicken-breast.jpg" 
          alt="Sample"
          width={400} 
          height={300} 
          className="object-cover object-center w-full h-56 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="flex items-center px-6 py-3 bg-gray-900">
        <svg
          aria-label="headphones icon"
          className="w-6 h-6 text-white fill-current"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
          />
        </svg>
        <h1 className="mx-3 text-lg font-semibold text-white">Focusing</h1>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          Patterson Johnson
        </h1>
        <p className="py-2 text-gray-700 dark:text-gray-400">
          Full Stack maker & UI / UX Designer, love hip hop music Author of
          Building UI.
        </p>
      </div>
    </div>
          </div>
        </div>
      </div>
    </section>

        </div>
    );
};

export default Shop;