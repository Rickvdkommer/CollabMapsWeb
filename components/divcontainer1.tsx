import type { NextPage } from "next";
import FadeInOnScroll from "./FadeInOnScroll";
import DivfadeInMoveOnScroll from "./divfade-in-move-on-scroll";
import DivheroButtonsHolder from "./divhero-buttons-holder";

const Divcontainer1: NextPage = () => {
  return (
    <div className="w-full max-w-4xl flex flex-col items-center justify-start sm:pb-[2rem] sm:pr-[2.06rem] sm:pl-[2rem]  gap-[3.63rem] text-center text-[1.17rem] text-high-contrast-dark font-poppins">
      <div className=" h-[0.06rem] bg-ghostwhite flex flex-row items-center justify-center py-[0rem] sm:px-[1.25rem]  max-w-full">
        <div className=" w-[26.37rem] relative bg-gray-1100 max-w-full" />
      </div>
      <div className=" flex flex-row items-center justify-center py-[0rem] px-[1.25rem]  max-w-full">
        <div className="w-full flex text-black flex-col items-center justify-center gap-[1.05rem] max-w-full">
          <DivfadeInMoveOnScroll
            
            leadIntelligenceAmplified="Get early access"
          />
          <FadeInOnScroll>
            <div className="flex flex-col items-start justify-start max-w-full">
              <div className="flex flex-col items-center justify-start py-[0rem] pr-[1.49rem] pl-[1.5rem]">
                <div className="relative leading-[1.87rem] flex items-center">
                  <span>
                    <p className="m-0">{`Finding Businesses or Content Creators to collaborate with should be EASY!`}</p>
                    <p className="m-0">
                      <span>{`Join our Early Access Program `}</span>
                      <i className="[text-decoration:underline] font-bold font-poppins">
                        right now!
                      </i>
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
      <FadeInOnScroll>
        <DivheroButtonsHolder
          joinTheBetaList="Join Beta"
          propWidth="44.27rem"
        />
      </FadeInOnScroll>
    </div>
  );
};

export default Divcontainer1;
