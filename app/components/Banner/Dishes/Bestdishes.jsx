"use client"
import { useEffect, useRef, useState } from "react";
import "keen-slider/keen-slider.min.css";  // Import KeenSlider CSS
import KeenSlider from "keen-slider";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import Button from "../Button";

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
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <div className="mt-8">
            <div ref={keenSliderRef} className="keen-slider">
              {/* First Slide */}
              <div className="keen-slider__slide opacity-40 rounded-full transition-opacity duration-500">
                <blockquote className="rounded-3xl  p-6  ">
                <div className="rounded-full overflow-hidden">
  <Image
    src="/images/penne-pasta.jpg"
    alt="Plate with pizza"
    width={500}
    height={500}
  />
</div>

                  
                </blockquote>
              </div>

              {/* Second Slide */}
              <div className="keen-slider__slide opacity-40 rounded-full transition-opacity duration-500">
                <blockquote className="rounded-3xl  p-6  ">
                <div className="rounded-full overflow-hidden">
  <Image
    src="/images/plate-with-pizza.jpg"
    alt="Plate with pizza"
    width={500}
    height={500}
  />
</div>

                  
                </blockquote>
              </div>

              {/* Third Slide */}
<div className="keen-slider__slide opacity-40 rounded-full transition-opacity duration-500 group relative overflow-hidden">
  <blockquote className="rounded-3xl p-6">
    <div className="rounded-full overflow-hidden relative">
      <Image
        src="/images/perfect-cheese-burger-with-vegetables-wooden-table-black-background-ai-generative.jpg"
        alt="Perfect Cheese Burger"
        width={500}
        height={500}
        className="transition-all duration-500"
      />
      
      {/* Sliding linear gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent top-[-100%] group-hover:top-0 transition-all duration-500"></div>

      {/* Centered text appearing after the gradient */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
        Cheese Burger
      </div>
    </div>
  </blockquote>
</div>



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
