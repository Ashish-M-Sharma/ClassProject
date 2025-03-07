import React from "react";

const MarqueeBanner = () => {
  return (
    <div className="w-full bg-white overflow-hidden whitespace-nowrap">
      <div className="flex items-center space-x-6 animate-marquee">
        <p className="font-bold text-black text-sm md:text-base">
          Demo sessions Monday to Saturday
        </p>
        <p className="font-bold text-black text-sm md:text-base">
          Contact: +91 7219777599
        </p>
        <button className="bg-orange-600 text-white px-3 py-1 text-sm md:text-base font-bold rounded">
          Register
        </button>
        <p className="text-red-600 font-bold text-sm md:text-base">
          Upcoming Batch: Mon Feb 24 2025
        </p>
      </div>
    </div>
  );
};

export default MarqueeBanner;
