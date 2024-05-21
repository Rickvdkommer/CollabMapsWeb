import type { NextPage } from "next";
import React, { useState } from "react";
import FadeInOnScroll from "./FadeInOnScroll";
import DivfadeInMoveOnScroll from "./divfade-in-move-on-scroll";
import DivheroButtonsHolder from "./divhero-buttons-holder";

const Divcontainer3: NextPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderContent = [
    {
      name: "Domains",
      text: "We conduct a comprehensive domain scan to secure optimal domains for email campaigns. The focus is on functionality rather than the domain name, setting up multiple emails per domain to scale your outreach. This automated process lays a seamless foundation for campaign deployment with minimal client input.",
    },
    {
      name: "Warming",
      text: "Each email address undergoes a strategic four-week warming period to establish sender reputation, ensuring emails bypass spam filters and avoid blacklisting. This crucial automation phase preps your email infrastructure for maximum deliverability and engagement.",
    },
    {
      name: "Sending",
      text: "Leveraging advanced scanning, we hyper-personalize each email based on the recipient's domain activities and public persona insights. Without divulging specifics, this phase employs proprietary personalization algorithms to ensure each message resonates deeply, enhancing open rates and engagement.",
    },
    {
      name: "Analyzing",
      text: "Our system continuously monitors and adjusts campaign strategies based on real-time data analytics, employing A/B testing and performance optimization techniques. Clients can expect a robust lead generation stream within two months, establishing our solution as a primary tool for B2B outreach.",
    },
  ];

  return (
    <div className="w-full max-w-4xl flex flex-col items-center justify-start pt-[2.06rem] pb-[2rem] sm:pr-[2.06rem] sm:pl-[2rem] gap-[3.63rem] text-center text-[1.17rem] font-poppins">
      {/* Surrounding area with blurred edges */}
      <FadeInOnScroll>
        <div className="rounded-lg p-6 w-full max-w-4xl ">
          {/* Button Slider */}
          <div className="relative bg-opacity-20 rounded-full py-5 w-full md:w-auto">
            {/* Button Grid */}
            <div className="grid grid-cols-2 justify-center gap-4 md:flex md:space-x-4">
              {sliderContent.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer hover:bg-gray-700 px-8 rounded-full font-poppins transition-all text-lg ${
                    activeIndex === index
                      ? "[background:linear-gradient(90deg,_#fff,_#9eadb9)] text-black"
                      : "text-white border-2 border-white bg-transparent"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Text Content Display */}
          <FadeInOnScroll>
            <div className="text-white text-center mt-4">
              {sliderContent[activeIndex].text}
            </div>
          </FadeInOnScroll>
        </div>
      </FadeInOnScroll>
    </div>
  );
};
export default Divcontainer3;