import React from "react";

const hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className="top-0 left-0 right-0 bottom-0 z-[2]" />
      <div className="p-5 text-center text-slate-800 ">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <div className="py-5 pt-0">
                <button
                  type="button"
                  className="rounded-full bg-amber-400 p-3 text-zinc-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <a href="#projects"><p>Learn more!</p></a>
                </button>           
              </div>
      </div>
    </div>
  );
};

export default hero;
