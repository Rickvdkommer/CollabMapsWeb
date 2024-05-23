import type { NextPage } from "next";
import FadeInOnScroll from "./FadeInOnScroll";
import DivfadeInMoveOnScroll from "./divfade-in-move-on-scroll";

const DivcenterText2: NextPage = () => {
  return (
    <div className="max-w-6xl pt[10rem] w-full flex flex-col items-center justify-start py-8 gap-16 z-10 mt-[-3] text-center text-9xl text-high-contrast-dark font-poppins">
      <div className="w-full flex flex-col items-center justify-center text-white gap-7">
        <FadeInOnScroll>
          <DivfadeInMoveOnScroll
            featuresOfYourLeads=""
            leadIntelligenceAmplified="Find businesses to collaborate with at your destination"
          />
        </FadeInOnScroll>
        <div className="flex flex-col items-center justify-start text-lg">
          <div className="flex flex-col items-center justify-start py-0 px-6">
            <FadeInOnScroll>
              <div className="relative flex-col leading-7 flex items-center text-center">
                <p className="m-0">
                  <span className="font-poppins">{`Fully `}</span>
                  <b className="font-poppins">Automated</b>
                  <span className="font-poppins">{``}</span>
                  <i className="underline font-poppins"></i>
                  <span>{`. `}</span>
                </p>
                </div>
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivcenterText2;
