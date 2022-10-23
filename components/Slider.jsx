import React, { useState } from "react";
import Image from "next/image";
import { SliderData } from "./projectData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="projects" className="mx-auto pt-[9rem] pb-10">
      <p className="mt-2 text-3xl font-bold leading-8 tracking-tight  pb-10 text-gray-900 sm:text-4xl text-center">Projects</p>
      <div className="relative flex justify-center">
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-500"
                  : "opacity-0"
              }
            >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className="absolute top-[50%] left-[120px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
              />

              {index === current && (
                <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href={`${slide.url}`} target="blank">
                <Image
                  src={`/${slide.image}`}
                  alt="/"
                  width="1420w"
                  height="1000h"
                  objectFit="cover"
                  className="rounded"
                />
                </a>
                <div className="p-5">
                      <a href={`${slide.url}`} target="blank">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{slide.name}</h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{slide.description}</p>
                  </div>
                </div>
                
              )}

              <FaArrowCircleRight
              onClick={nextSlide}
                className="absolute top-[50%] right-[120px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
              />

              </div>
            
          );
        })}
        </div>
    </div>
  );
};

export default Slider;
