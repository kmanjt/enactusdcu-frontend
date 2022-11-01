import React from "react";
import { TypeAnimation } from "react-type-animation";

const hero = ({ heading, message }) => {
  return (
    <div
      id="home"
      className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img"
    >
      {/* Overlay */}
      <div className='top-0 left-0 right-0 bottom-0 z-[2]' />
      <div className="p-5 z-[2] text-center">
        <h1 className="md:text-7xl sm:text-7xl text-6xl font-bold tracking-wide">
          {heading}
        </h1>
        <p className="py-5 text-xl font-semibold">{message}</p>
        <TypeAnimation
          sequence={[
            "Enactus DCU is empowerment.", // Types
            4000, // Waits 3s
            "Enactus DCU is entrepreneurship.",
            4000, // Waits 3s
            "Enactus DCU is leadership.",
            4000, // Waits 3s
            "Enactus DCU is empathy.",
            4000, // Waits 3s
            "Enactus DCU is experience.",
            4000, // Waits 3s
            "Enactus DCU is sustainable positive impact.",
            4000, // Waits 3s
            "Enactus DCU is practical skills.",
            4000,
            () => {
              // Place optional callbacks anywhere in the array
            },
          ]}
          wrapper="p"
          speed={40}
          cursor={true}
          repeat={Infinity}
          className="md:text-xl sm:text-xl text-l pb-5 font-semibold"
        />
        <div className="py-5 pt-0">
          <button
            type="button"
            className="rounded-full bg-amber-400 p-3 text-zinc-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <a href="#projects">
              <p>Learn more!</p>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default hero;
