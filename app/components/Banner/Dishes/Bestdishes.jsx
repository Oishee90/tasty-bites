"use client"
import { useEffect, useRef, useState } from "react";
import "keen-slider/keen-slider.min.css";  // Import KeenSlider CSS
import KeenSlider from "keen-slider";
import Image from "next/image";

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
            </div>
          </div>

          <div className="mt-8 text-center">
            <span ref={keenSliderActive}></span> / <span ref={keenSliderCount}></span>
          </div>

          <div className="mt-4 text-center">
            <button onClick={handlePrevious} className="px-4 py-2 text-white bg-blue-600 rounded">
              Previous
            </button>
            <button onClick={handleNext} className="px-4 py-2 text-white bg-blue-600 rounded">
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bestdishes;
