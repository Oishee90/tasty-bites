"use client";
import React, { useState, useEffect } from "react";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sections = [

    {
      heading: "Redefining Fast Food Excellence",
      description:
        "At Tasty Bites, we are reimagining the fast food experience. From gourmet burgers to delightful snacks, our menu blends tradition with innovation.",
      highlight: "Freshly made, just for you. 🍔",
      emoji: "Who We Are ",
      image: "/images/about/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table.jpg",
    },
    {
      heading: "Serving Smiles, One Bite at a Time",
      description:
        "To provide premium-quality, freshly prepared fast food that meets diverse tastes. From satisfying cravings to delivering happiness, we’ve got it all covered.",
      highlight: "Serving smiles, one bite at a time. 🚀",
      emoji: "Our Mission 🚀",
      image: "/images/about/friends-eating-pizza-drinking-coffee.jpg",
    },
    {
      heading: " A Global Connection Through Flavors",
      description:
        "To become the world’s favorite fast food brand by offering flavors that connect cultures and people. Explore a universe of taste with us.",
      highlight: "Connecting people through flavors. 🌎",
      emoji: "Our Vision 🌟",
      image:
        "/images/about/group-cheerful-friends-eating-donuts-cafe.jpg",
    },
    {
      heading: " Exceptional Taste, Every Time",
      description:
        "We combine exceptional taste, speedy service, and a customer-first approach. Let every meal be a celebration of flavor and quality.",
      highlight: "Unmatched quality, every time. ✨",
      emoji: "Why Choose Us? ✨",
      image:
        "/images/about/front-view-three-friends-park-with-beer-burgers.jpg",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index"));
            setCurrentIndex(index);
          }
        });
      },
      {
        threshold: 0.4, // 40% visible হলে trigger হবে।
      }
    );

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div   >
    <div className=" text-black pt-20 pb-10 text-center px-4">
        <h1 className="text-5xl font-bold sm:text-6xl mb-4">About <span className="text-green-800">Us</span></h1>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl">
          Discover who we are, what we stand for, and why our fast food experience
          is unlike any other. Let us take you on a journey through our mission,
          vision, and values.
        </p>
      </div>
    <div className="h-[550px] snap-y snap-mandatory overflow-y-scroll"  style={{
    backgroundImage: `url('/images/about/fried-chicken-with-vegetables-herbs-aluminum-skillet.jpg')`,
    backgroundSize: 'cover', // ইমেজ পুরোপুরি ভরাট হবে।
    backgroundPosition: 'center', // ইমেজ সেন্টার পজিশনে থাকবে।
    backgroundRepeat: 'no-repeat', // ইমেজ রিপিট করবে না।
  }}> 
      {sections.map((section, index) => (
        <section
          key={index}
          data-index={index}
          className={`section relative h-[550px] snap-start flex items-center justify-center bg-cover bg-center transition-all duration-100 ease-in-out transform ${
            index === currentIndex
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{
            backgroundImage: `url('${section.image}')`,
           
            backgroundSize: 'cover', // ইমেজ পুরোপুরি ভরাট হবে।
            backgroundPosition: 'center', // ইমেজ সেন্টার পজিশনে থাকবে।
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 text-center text-white px-4">
            <span className="text-6xl font-extrabold  ">{section.emoji}</span>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              {section.heading}
            </h2>
            <p className="mt-4 max-w-lg mx-auto text-lg">{section.description}</p>
            <p className="mt-2 font-semibold text-[#FB9300]">{section.highlight}</p>
          </div>
        </section>
      ))}
    </div></div>
  );
};

export default About;
