import type { NextPage } from "next";
import FadeInOnScroll from "./FadeInOnScroll";
import DivfadeInMoveOnScroll from "./divfade-in-move-on-scroll";

import React from "react";

const DivcenterText: NextPage = () => {
  return (
    <div className="max-w-6xl sm:pt-[10rem] md:pt-[24rem] pt:[10rem] w-full flex flex-col pt-6 items-center pb-20 sm:pb-[rm20] justify-start py-8 gap-16 z-10 mt-[-3] text-center text-9xl text-high-contrast-dark font-poppins">
      <div className="relative pb-20 flex flex-col items-center justify-center gap-7">
        <div className="absolute inset-0 bg-white text-black bg-opacity-50 rounded-lg z-0"></div>
        <FadeInOnScroll>
          <DivfadeInMoveOnScroll 
            leadIntelligenceAmplified="Monitizing Content Creation."
          />
        </FadeInOnScroll>
        <div className="flex flex-col items-center justify-start text-lg">
          <div className="flex flex-col items-center justify-start py-0 px-6">
            <FadeInOnScroll>
              <div className="relative flex-col leading-7 flex items-center text-center">
                <p className="m-0">
                  <span className="font-poppins sm:text-5xl text-2xl text-black">{`Getting collaborations should be `}</span>
                  <b className="font-poppins sm:text-5xl text-2xl text-black">easy</b>
                  <span className="font-poppins">{``}</span>
                  <i className="underline font-poppins"></i>
                  <span>{`. `}</span>
                </p>
                <p className="m-0 text-black sm:text-5xl text-2xl text-y">
                  We're simplifying the way to find possible collaboration partners.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @media (max-width: 640px) {
          .text-dynamic {
            font-size: 6rem; /* Adjust the font size for smaller screens */
          }
        }
      `}</style>
    </div>
  );
};

export default DivcenterText;
