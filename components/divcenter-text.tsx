import type { NextPage } from "next";
import FadeInOnScroll from "./FadeInOnScroll";
import DivfadeInMoveOnScroll from "./divfade-in-move-on-scroll";

import React from "react";

const DivcenterText: NextPage = () => {
  return (
    <div className="max-w-6xl w-full flex flex-col pt-20 items-center justify-start py-8 gap-16 z-10 mt-[-3] text-center text-9xl text-high-contrast-dark font-poppins">
      <div className=" flex flex-col items-center justify-center gap-7">
        <FadeInOnScroll>
          <DivfadeInMoveOnScroll 
            featuresOfYourLeads="Features of YourLeads"
            leadIntelligenceAmplified="Lead Intelligence, Simplified."
          />
        </FadeInOnScroll>
        <div className="flex flex-col items-center justify-start text-lg">
          <div className="flex flex-col items-center justify-start py-0 px-6">
            <FadeInOnScroll>
              <div className="relative flex-col leading-7 flex items-center text-center">
                <p className="m-0">
                  <span className="font-poppins">{`Getting more leads should be `}</span>
                  <b className="font-poppins">easy</b>
                  <span className="font-poppins">{` + `}</span>
                  <i className="underline font-poppins">effective</i>
                  <span>{`. `}</span>
                </p>
                <p className="m-0 text-y">
                  Take away the pain and effort of generating B2B Leads.
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