import React from "react";
import { Link } from "react-router-dom";


export function TopSection() {
  return (
    <div className="absolute w-full h-full left-0 bg-opacity-25  xl:mt-16 flex flex-col items-center pt-16 z-20">
      <h1 className="m-0 text-white font-extrabold mt-2 xl:mt-[10%] text-2xl md:text-6xl">Welcome to Celestia</h1>
      <h4 className="pt-3 text-white font-semibold  md:text-2xl md:mt-2">Planetarium of the Future</h4>
      <p className="m-2 px-2 text-center md:mt-2 text-white text-sm md:text-lg font-medium leading-6 max-w-3xl ">
        You can help us cool off our world and have it go back to its best state ever by donating to help fix our only world and our beloved EARTH! Be cool and let the earth be cool. Let the icebergs live. The globe is warming and will set to fire. Stop polluting; it will cost extra.
      </p>

      <a href="http://127.0.0.1:1338" target="_blank">
      <button className="md:mt-8 px-8 py-3 bg-green-600 text-white text-sm md:text-lg font-semibold rounded-lg transition duration-300 ease-in-out hover:bg-transparent hover:border-2 hover:border-green-600 focus:outline-none focus:border-green-600">Explore Virtual Planetarium</button>
      </a >
    </div>
  );
}
