import type { NextPage } from "next";
import FadeInOnScroll from "./FadeInOnScroll";

const DivcontainerWithImage: NextPage = () => {
  return (
    <div className="mx-auto md:pt-[12rem] max-w-6xl border-box w-full flex flex-col items-center justify-start py-[2.06rem] gap-[4rem] z-[1] mt-[-0.75rem] text-center text-[2.75rem] sm:text-[3.5rem] lg:text-[4.53rem] text-high-contrast-dark font-poppins">
      <div className="flex flex-col items-start justify-start py-0 sm:flex-row">
        <div className="order-2 sm:order-1 flex-1 flex flex-col items-center justify-start gap-3 overflow-hidden">
          <div className="flex flex-col items-start justify-start gap-[0.73rem]">
            <FadeInOnScroll>
              <div className="flex flex-col items-start justify-start gap-4 sm:flex-row sm:gap-0">
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-0">
                  <img
                    src="/ForContentCreators.png"
                    alt="For Content Creators"
                    className="w-1/2 sm:w-1/2 object-cover order-1 sm:order-2"
                  />
                </div>
                <div className="w-full sm:w-4/5 text-left flex items-center"> {/* Changed width for text */}
                  <div>
                    <div className="text-center sm:text-left text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-high-contrast-dark">
                      For Content Creators
                    </div>
                    <div className="text-center md:px-0 px-6 sm:text-left text-[1rem] tracking-wide sm:text-[1.25rem] lg:text-[1.5rem] font-medium text-high-contrast-dark">
                      Finding businesses to collorate with sucks. <br></br>
                      Our location-based platform allows you to find businesses eager to partner with content creators like you in your region or area, removing the hassle of reaching out to uninterested companies.

                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
          <div className="relative flex flex-col w-full items-center justify-start gap-[2.19rem] text-[1.17rem]">
            <div className="flex flex-col items-start justify-start gap-4">
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
