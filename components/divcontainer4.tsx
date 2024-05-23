import type { NextPage } from "next";
import FadeInOnScroll from "./FadeInOnScroll";

const DivcontainerWithImage: NextPage = () => {
  return (
    <div className="mx-auto pb-20 max-w-6xl border-box w-full flex flex-col items-center justify-start py-[2.06rem] gap-[4rem] z-[1] mt-[-0.75rem] text-center text-[2.75rem] sm:text-[3.5rem] lg:text-[4.53rem] text-high-contrast-dark font-poppins">
      <div className="flex flex-col items-start justify-start">
        <div className="flex flex-row items-center justify-center">
          <div className="flex-1 flex flex-col items-center justify-start gap-7 sm:px-4 overflow-hidden">
            <div className="flex flex-col items-center justify-start gap-[0.73rem]">
              <FadeInOnScroll>
                <div className="flex flex-row items-center justify-center w-full gap-7">
                  <img
                    src="/path/to/your/image.jpg"
                    alt="Descriptive Alt Text"
                    className="w-1/2 sm:w-1/3 object-cover"
                  />
                  <div className="flex flex-col items-start justify-start gap-4 w-1/2 sm:w-2/3 text-left">
                    <div className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-high-contrast-dark">
                      Your Title Here
                    </div>
                    <div className="text-[1rem] sm:text-[1.25rem] lg:text-[1.5rem] font-medium text-high-contrast-dark">
                      Your descriptive text goes here. This section can include
                      multiple lines of text to provide information about the
                      image displayed on the left side.
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
      <div className="w-full max-w-4xl flex flex-col items-center justify-start pt-[-4rem] pb-[14rem] sm:pr-[2.06rem] sm:pl-[2rem] gap-[3.63rem] text-center text-[1.17rem] text-high-contrast-dark font-poppins">
        <FadeInOnScroll>
          <div className="flex flex-col w-full items-center justify-start">
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full font-bold text-lg hover:bg-orange-600">
              Get Access
            </button>
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  );
};

export default DivcontainerWithImage;