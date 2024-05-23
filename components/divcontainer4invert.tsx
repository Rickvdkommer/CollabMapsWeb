import type { NextPage } from "next";
import FadeInOnScroll from "./FadeInOnScroll";

const DivcontainerWithImage: NextPage = () => {
  return (
    <div className="mx-auto pb-10 max-w-6xl border-box w-full flex flex-col items-center justify-start py-[2.06rem] gap-[4rem] z-[1] mt-[-0.75rem] text-center text-[2.75rem] sm:text-[3.5rem] lg:text-[4.53rem] text-high-contrast-dark font-poppins">
      <div className="flex flex-col items-start justify-start py-0 sm:flex-row">
        <div className="order-2 sm:order-1 flex-1 flex flex-col items-center justify-start gap-7 sm:px-4 overflow-hidden">
          <div className="flex flex-col items-start justify-start gap-[0.73rem]">
            <FadeInOnScroll>
              <div className="flex flex-col items-start justify-start gap-4 sm:flex-row sm:gap-16">
                <div className="w-full sm:w-1/3 text-center sm:text-left"> {/* Changed width for image */}
                  <img
                    src="/ForContentCreators.png"
                    alt="For Content Creators"
                    className="w-full object-cover"
                  />
                </div>
                <div className="w-full sm:w-2/3 text-left flex items-center"> {/* Changed width for text */}
                  <div>
                    <div className="text-center sm:text-left text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-high-contrast-dark">
                      For Content Creators
                    </div>
                    <div className="text-center sm:text-left text-[1rem] tracking-wide sm:text-[1.25rem] lg:text-[1.5rem] font-medium text-high-contrast-dark">
                      Tired of searching for businesses to collaborate with? <br></br>
                      Look no further. Our location-based platform allows you to find businesses eager to partner with content creators like you. 
                      <br></br>Say hello to exciting collaborations and endless opportunities to showcase your talent.
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
