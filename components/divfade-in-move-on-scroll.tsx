import type { NextPage } from "next";
import FadeInOnScroll from "./FadeInOnScroll";

type DivfadeInMoveOnScrollType = {
  featuresOfYourLeads?: string;
  leadIntelligenceAmplified?: string;
};

const DivfadeInMoveOnScroll: NextPage<DivfadeInMoveOnScrollType> = ({
  featuresOfYourLeads,
  leadIntelligenceAmplified,
}) => {
  return (
    <div className="flex flex-col items-center justify-start gap-2 text-center text-4xl font-quicksand">
      <FadeInOnScroll>
        <button className="pt-1 pb-1 px-2 bg-transparent rounded-lg border border-solid border-gray-800 hover:bg-gray-200">
          <div className="text-lg tracking-wide leading-6 font-quicksand text-high-contrast-dark">
            {featuresOfYourLeads}
          </div>
        </button>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <div className="py-0 px-5">
          <div className="text-[2.75rem] sm:text-6xl relative leading-tight font-semibold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#232b2b_30%,_#ECAD6A)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full">
            {leadIntelligenceAmplified}
          </div>
        </div>
      </FadeInOnScroll>
    </div>
  );
};

export default DivfadeInMoveOnScroll;
