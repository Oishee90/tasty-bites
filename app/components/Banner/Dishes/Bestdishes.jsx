/* eslint-disable react/no-unescaped-entities */
"use client"
import { useEffect, useRef, useState } from "react";
import "keen-slider/keen-slider.min.css";  // Import KeenSlider CSS
import KeenSlider from "keen-slider";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import Button from "../Button";
import { LuArrowBigRight } from "react-icons/lu";
const slidesData = [
  {
    id: 1,
    title: "Creamy Pasta",
    image: "/images/penne-pasta-cream-cheese.jpg",
    alt: "Plate with pasta",
  },
  {
    id: 2,
    title: "Plate Pizza",
    image: "/images/plate-with-pizza.jpg",
    alt: "Plate with pizza",
  },
  {
    id: 3,
    title: "Cheese Burger",
    image: "/images/perfect-cheese-burger-with-vegetables-wooden-table-black-background-ai-generative.jpg",
    alt: "Perfect Cheese Burger",
  },
];

const Bestdishes = () => {
  const [slider, setSlider] = useState(null);
  const keenSliderRef = useRef(null);
  const keenSliderActive = useRef(null);
  const keenSliderCount = useRef(null);

 

  useEffect(() => {
    const keenSliderInstance = new KeenSlider(keenSliderRef.current, {
      loop: true,
      defaultAnimation: {
        duration: 750,
      },
      slides: {
        origin: "center",
        perView: 3,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: {
            origin: "center",
            perView: 1.5,
            spacing: 16,
          },
        },
        "(min-width: 768px)": {
          slides: {
            origin: "center",
            perView: 1.75,
            spacing: 16,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            origin: "center",
            perView: 3,
            spacing: 16,
          },
        },
      },
      created(sliderInstance) {
        updateSlideStyles(sliderInstance);
        sliderInstance.slides[sliderInstance.track.details.rel].classList.remove("opacity-40");
        keenSliderActive.current.innerText = sliderInstance.track.details.rel + 1;
        keenSliderCount.current.innerText = sliderInstance.slides.length;
      },
      slideChanged(sliderInstance) {
        updateSlideStyles(sliderInstance);
        sliderInstance.slides.forEach((slide) => slide.classList.add("opacity-40"));
        sliderInstance.slides[sliderInstance.track.details.rel].classList.remove("opacity-40");
        keenSliderActive.current.innerText = sliderInstance.track.details.rel + 1;
      },
    });

    setSlider(keenSliderInstance);

    return () => {
      keenSliderInstance.destroy();
    };
  }, []);
  const updateSlideStyles = (sliderInstance) => {
    sliderInstance.slides.forEach((slide, index) => {
      slide.classList.remove(
        "border-b-4",
        "border-l-4",
        "border-r-4",
        "rounded-b-lg",
        "rounded-l-lg",
        "rounded-r-lg",
        "border-blue-500",
          "border-yellow-500",
            "border-green-600",
            "border-red-500",
            "rounded-full"
      );
    });

    const activeIndex = sliderInstance.track.details.rel;
    const leftIndex =
      (activeIndex - 1 + sliderInstance.slides.length) % sliderInstance.slides.length;
    const rightIndex =
      (activeIndex + 1) % sliderInstance.slides.length;

    sliderInstance.slides[activeIndex].classList.add(
      "border-b-4",
      "rounded-b-lg",
     "border-green-600",  "rounded-full"
    );
    sliderInstance.slides[leftIndex].classList.add(
      "border-l-4",
      "rounded-l-lg",
      
      "border-red-500", "rounded-full"
    );
    sliderInstance.slides[rightIndex].classList.add(
      "border-r-4",
      "rounded-r-lg",
      "border-yellow-500",  "rounded-full"
    );
  };
  const handlePrevious = () => {
    slider?.prev();
  };

  const handleNext = () => {
    slider?.next();
  };


  return (
    <div>
      <section className="bg-white relative">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex justify-between items-center">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          CHEF'S <span className="text-green-700">SPECIALS 🍽️ </span>
          </h2>
 <div><button className="relative px-4 py-3  border-2 border-transparent rounded-lg border-r-4 border-b-4 border-r-black border-b-black bg-none text-[#FB9300] font-bold border-t-[#FB9300] border-l-[#FB9300] hover:text-white overflow-hidden group transform transition-all duration-500 ease-out hover:translate-x-4 hover:translate-y-2">
  <span className="relative z-10  flex items-center gap-2">See All<div className=""><LuArrowBigRight className="text-inherit text-extrabold w-[24px] h-[18px]" />
  </div></span>
  
  {/* Color fill from bottom-left corner */}
  <span className="absolute inset-0 bg-[#FB9300] transform scale-x-0 scale-y-0 origin-bottom-left group-hover:scale-x-100 group-hover:scale-y-100 transition-transform duration-500 ease-out"></span>
</button>
 </div> </div>
          <div className="mt-8">
            <div ref={keenSliderRef} className="keen-slider">
            
    {slidesData.map((slide) => (
      <div
        key={slide.id}
        className="keen-slider__slide opacity-40 rounded-full transition-opacity duration-500 group relative overflow-hidden"
      >
        <blockquote className="rounded-3xl p-6">
          <div className="rounded-full overflow-hidden relative">
            <Image
              src={slide.image}
              alt={slide.alt}
              width={500}
              height={500}
              className="transition-all duration-500"
            />

            {/* Sliding linear gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent top-[-100%] group-hover:top-0 transition-all duration-500"></div>

            {/* Centered text appearing after the gradient */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
              {slide.title}
            </div>
          </div>
        </blockquote>
      </div>
    ))}
  </div>



          </div>

        

          <div className="mt-6 text-center flex items-center justify-center gap-4">
  <button onClick={handlePrevious} className="px-4 py-2 border border-red-500 text-black hover:text-white rounded-full hover:bg-red-600 ">
  <IoArrowBack />
  </button>

  <span className="text-lg  mr-5 ml-5 font-semibold">
    <span ref={keenSliderActive}></span> / <span ref={keenSliderCount}></span>
  </span>

  <button onClick={handleNext} className="px-4 py-2 border border-red-500 text-black hover:text-white rounded-full hover:bg-red-600 ">

  <IoMdArrowForward />
  </button>
</div>


  
        </div>
     
      </section>
      
  


    </div>
  );
};

export default Bestdishes;
