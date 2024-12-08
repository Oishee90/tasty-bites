"use client";
import React, { useState } from "react";
import Image from "next/image"; // Import next/image

const categories = [
  {
    name: "Burger",
    description: "Juicy and delicious burgers with fresh ingredients.",
    itemCount: 8,
    image: "/images/perfect-cheese-burger-with-vegetables-wooden-table-black-background-ai-generative.jpg",
    hoverImage: "/images/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon.jpg",
  },
  {
    name: "Pizza",
    description: "Cheesy pizzas with a variety of toppings.",
    itemCount: 6,
    image: "/images/perfect-cheese-burger-with-vegetables-wooden-table-black-background-ai-generative.jpg",
    hoverImage: "/images/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon.jpg",
  },
  {
    name: "Pasta",
    description: "Authentic pasta dishes from around the world.",
    itemCount: 5,
    image: "/images/perfect-cheese-burger-with-vegetables-wooden-table-black-background-ai-generative.jpg",
    hoverImage: "/images/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon.jpg",
  },
  {
    name: "Grill",
    description: "Grilled meats and veggies for every taste.",
    itemCount: 7,
    image: "/images/perfect-cheese-burger-with-vegetables-wooden-table-black-background-ai-generative.jpg",
    hoverImage: "/images/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon.jpg",
  },
  {
    name: "Drinks",
    description: "Refreshing beverages for every occasion.",
    itemCount: 4,
    image: "/images/perfect-cheese-burger-with-vegetables-wooden-table-black-background-ai-generative.jpg",
    hoverImage: "/images/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon.jpg",
  },
  {
    name: "Salad",
    description: "Healthy and fresh salad options.",
    itemCount: 3,
    image: "/images/perfect-cheese-burger-with-vegetables-wooden-table-black-background-ai-generative.jpg",
    hoverImage: "/images/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon.jpg",
  },
  {
    name: "Desserts",
    description: "Sweet treats to end your meal.",
    itemCount: 9,
    image: "/images/perfect-cheese-burger-with-vegetables-wooden-table-black-background-ai-generative.jpg",
    hoverImage: "/images/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon.jpg",
  },
  {
    name: "Soups",
    description: "Warm and hearty soups for every season.",
    itemCount: 6,
    image: "/images/perfect-cheese-burger-with-vegetables-wooden-table-black-background-ai-generative.jpg",
    hoverImage: "/images/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon.jpg",
  },
];

const Category = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleSeeMore = () => {
    setVisibleCount(categories.length);
  };

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.slice(0, visibleCount).map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div className="relative h-64 w-full">
                {/* Normal image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                  />
                </div>
                {/* Hover image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={category.hoverImage}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-700 group-hover:underline">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-2">{category.description}</p>
                <p className="text-sm text-gray-500 mt-1">Items available: {category.itemCount}</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition">
                  View All Items
                </button>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < categories.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleSeeMore}
              className="bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600 transition"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
