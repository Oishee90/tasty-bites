"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { TbShoppingCartPlus } from "react-icons/tb";
import Image from 'next/image';

const foodItems = [
  {
    id: 1,
    title: "Special Burger",
    category: "Burger",
    image: "/images/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon.jpg",
    description: "Delicious grilled chicken burger with fresh vegetables.",
    price: "$80.20",
    rating: 4,
  },
  {
    id: 2,
    title: "Cheesy Pizza",
    category: "Pizza",
    image: "/images/delicious-pizza-with-melted-cheese-tomato-basil.jpg",
    description: "Cheesy pizza with a crispy crust and tasty toppings.",
    price: "$15.50",
    rating: 5,
  },
  {
    id: 3,
    title: "Grilled Chicken",
    category: "Grill",
    image: "/images/closeup-shot-deliciously-prepared-chicken-served-with-onions-chili-sauce.jpg",
    description: "Tender grilled chicken with a smoky flavor.",
    price: "$25.30",
    rating: 4,
  },
  {
    id: 4,
    title: "Creamy Pasta",
    category: "Pasta",
    image: "/images/penne-pasta-cream-cheese.jpg",
    description: "Creamy pasta loaded with fresh ingredients.",
    price: "$12.75",
    rating: 3,
  },
  {
    id: 5,
    title: "Shawarma",
    category: "Shawrma",
    image: "/images/ryan-concepcion-50KffXbjIOg-unsplash.jpg",
    description: "Fresh and healthy shawarma salad.",
    price: "$9.99",
    rating: 5,
  },
  {
    id: 6,
    title: "Lemon Soda",
    category: "Drinks",
    image: "/images/lime-cocktail-mint-side-view.jpg",
    description: "Refreshing lemon soda to cool you down.",
    price: "$5.50",
    rating: 4,
  },
  {
    id: 7,
    title: "Deluxe Burger",
    category: "Burger",
    image: "/images/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table.jpg",
    description: "Deluxe burger with extra toppings.",
    price: "$18.00",
    rating: 4,
  },
  {
    id: 8,
    title: "Pasta Primavera",
    category: "Pasta",
    image: "/images/farfalle-pasta-with-seafood-cherry-tomatoes-green-peas.jpg",
    description: "Classic pasta primavera with fresh vegetables.",
    price: "$14.30",
    rating: 5,
  },
  {
    id: 9,
    title: "Cheese Pasta",
    category: "Pasta",
    image: "/images/closeup-casserole-dish-filled-with-baked-pasta-meat-sauce-melted-cheese.jpg",
    description: "Creamy cheese pasta with a touch of herbs.",
    price: "$12.50",
    rating: 4,
  },
  {
    id: 10,
    title: "Cheese Burger",
    category: "Burger",
    image: "/images/perfect-cheese-burger-with-vegetables-wooden-table-black-background-ai-generative.jpg",
    description: "Classic cheese burger with melted cheddar and fresh lettuce.",
    price: "$16.00",
    rating: 5,
  },
  {
    id: 11,
    title: "Orange Soda",
    category: "Drinks",
    image: "/images/mojito-cocktail-with-side-lemon.jpg",
    description: "Refreshing orange soda with ice and mint.",
    price: "$4.50",
    rating: 4,
  },
  {
    id: 12,
    title: "Vegetable Salad Grill",
    category: "Grill",
    image: "/images/fresh-vegetable-salad-with-grilled-chicken-breast.jpg",
    description: "Grilled vegetable salad with balsamic dressing.",
    price: "$10.30",
    rating: 5,
  },
  
];

const Shop = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      origin: "center",
      perView: 1.25,
      spacing: 16,
    }, breakpoints: {
      "(min-width: 768px)": { // Tablet view
        slides: {
          origin: "center",
          perView: 2, // Show 2 slides on tablet screens
          spacing: 24, // Adjust spacing for tablet
        },
      },
   
      "(min-width: 1024px)": {
        slides: {
          origin: "auto",
          perView: 3,
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
          <h2 className="max-w-xl text-4xl font-bold tracking-tight text-black sm:text-5xl">
          BUILD YOUR <span className="text-green-700">PLATE 🥙</span>
          </h2>
            <div className="mt-8 flex gap-4 lg:mt-0">
              <button
                aria-label="Previous slide"
                onClick={() => instanceRef.current?.prev()}
                className="rounded-full border border-red-600 p-3 text-red-600 transition hover:bg-red-700 hover:text-white"
              >
                &lt;
              </button>
              <button
                aria-label="Next slide"
                onClick={() => instanceRef.current?.next()}
                className="rounded-full border border-red-600 p-3 text-red-600 transition hover:bg-red-700 hover:text-white"
              >
                &gt;
              </button>
            </div>
          </div>
          <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} className="keen-slider">
              {foodItems.map((item) => (
                <div
                  key={item.id}
                  className="keen-slider__slide w-full max-w-sm overflow-hidden bg-red-50 hover:bg-white rounded-2xl shadow-lg dark:bg-gray-800 group"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="object-cover object-center w-full h-56 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="bg-red-700 pr-4 flex items-center justify-between">
                    <div className="flex items-center px-6 py-3">
                      <IoFastFoodOutline className="text-white text-xl" />
                      <h1 className="mx-3 text-xl font-semibold text-white">
                        {item.category}
                      </h1>
                    </div>
                    <div className="text-2xl hover:bg-[#FB9300] cursor-pointer transition ease-in-out duration-500 bg-black px-2 py-2 rounded-lg">
                      <TbShoppingCartPlus className="text-white" />
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="flex items-center pl-6 justify-between">
                      <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {item.title}
                      </h1>
                      <FaRegHeart className="text-xl hover:text-red-700 cursor-pointer" />
                    </div>
                    <div className="flex mt-2 px-6 item-center">
                      {Array.from({ length: 5 }, (_, index) => (
                        <svg
                          key={index}
                          className={`w-5 h-5 ${
                            index < item.rating ? "text-[#FB9300]" : "text-gray-500"
                          } fill-current dark:text-gray-300`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                    <div className="pt-2 px-7 text-gray-700 dark:text-gray-400">
                      <p>{item.description}</p>
                    </div>
                    <div className="pt-2 px-8 text-black cursor-pointer  font-bold dark:text-gray-400">
                      <p className="hover:text-green-600">View <u>Details</u></p>
                    </div>
                    <div className="pb-2 pt-2 px-4 flex items-center justify-center">
                      <h1 className="text-2xl text-red-600 font-bold">{item.price}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
