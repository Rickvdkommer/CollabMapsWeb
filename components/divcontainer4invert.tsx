import type { NextPage } from "next";
import FadeInOnScroll from "./FadeInOnScroll";

const DivcontainerWithImage: NextPage = () => {
  return (
    <div className="mx-auto md:pt-[16rem] max-w-6xl border-box w-full flex flex-col items-center justify-start py-[10.06rem] gap-[0rem] z-[1] mt-[-0.75rem] text-center text-[2.75rem] sm:text-[3.5rem] lg:text-[4.53rem] text-high-contrast-dark font-poppins">
      <div className="flex flex-col items-center items-start justify-start py-0 sm:flex-row">
        <div className="order-2 sm:order-1 flex-1 flex flex-col items-center justify-start gap-3 overflow-hidden">
          <div className="flex items-center flex-col items-start justify-start gap-[0.73rem]">
            <FadeInOnScroll>
              <div className="flex flex-col items-center justify-start gap-4 sm:flex-row sm:gap-0">
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-0">
                  <img
                    src="/ForContentCreators.png"
                    alt="For Content Creators"
                    className="w-1/2 sm:w-1/2 object-cover order-1 sm:order-2"
                  />
                </div>
                <div className="w-full sm:w-4/5 text-left flex items-center">
                  <div>
                    <div className="text-center sm:text-left text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-high-contrast-dark">
                      For Content Creators
                    </div>
                    <div className="text-center md:px-0 px-6 sm:text-left text-[1rem] tracking-wide sm:text-[1.25rem] lg:text-[1.5rem] font-medium text-high-contrast-dark">
                      CollabMaps' location-based platform connects you with local businesses, making collaborating with businesses hassle-free.
                      <ul className="list-disc ml-[-17px] mr-7 mt-4 space-y-6">
                        <li>
                          <span className="font-semibold">Discover Nearby Businesses:</span><br></br> Easily find and connect with local businesses looking for collaborations.
                        </li>
                        <li>
                          <span className="font-semibold">Simplify Your Workflow:</span><br></br> View business profiles, check collaboration opportunities, and communicate all in one place.
                        </li>
                        <li>
                          <span className="font-semibold">Grow Your Influence:</span><br></br> Partner with businesses that align with your audience and enhance your reach.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
          <div className="relative flex flex-col w-full items-center justify-start gap-[0.19rem] text-[1.17rem]">
            <div className="flex flex-col items-start justify-start gap-0">
              <FadeInOnScroll>
                <div className="mq450:hidden flex flex-col items-center justify-start py-0 px-7">
                  <div className="relative leading-[1.87rem] flex items-center"></div>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivcontainerWithImage;
