"use client"
import  { useState } from "react";

const Banner = () => {
  const slides = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dpomtzref/image/upload/v1732629128/C4RRJXaVTkeryC7BhzLJlw_kxpozv.webp",
      title: "Explore the Future",
      description: "Discover cutting-edge natural baeuty.",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dpomtzref/image/upload/v1732629924/bndrbnexpce_diyoff.png",
      title: "Empower Your Life",
      description: "Unleash the beaty of nature in your daily life.",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dpomtzref/image/upload/v1732630882/Untitled_design_yfkoys.png",
      title: "Stay Connected",
      description: "Keep in touch with the world seamlessly.",
    },

  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-1000 ${
            index === currentSlide ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            transform: `translateX(${(index - currentSlide) * 100}%)`,
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white text-center p-4">
            <h1 className="text-4xl font-bold mb-2">{slide.title}</h1>
            <p className="text-lg">{slide.description}</p>
          </div>
        </div>
      ))}

     
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button
          onClick={handlePrev}
          className="bg-white text-black p-3 rounded-full shadow-lg hover:bg-[#80ff80]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="bg-white text-black p-3 rounded-full shadow-lg hover:bg-[#80ff80]"
        >
    
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;
