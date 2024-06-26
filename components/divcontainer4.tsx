import type { NextPage } from "next";
import FadeInOnScroll from "./FadeInOnScroll";

const DivcontainerWithImage: NextPage = () => {
  return (
    <div className="mx-auto pt-[0rem] pb-10 max-w-6xl border-box w-full flex flex-col items-center justify-start py-[0.56rem] gap-[1rem] z-[1] mt-[-0.75rem] text-center text-[2.75rem] sm:text-[3.5rem] lg:text-[4.53rem] text-high-contrast-dark font-poppins">
      <div className="flex flex-col items-start py-0 justify-start">
        <div className="flex flex-row items-center justify-center">
          <div className="flex-1 flex flex-col items-center justify-start gap-7 sm:px-4 overflow-hidden">
          <div className="flex flex-col items-center justify-start gap-[0.73rem] p-6">
              <FadeInOnScroll>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-16">
                  <img
                    src="/ForBusiness.png"
                    alt="For Businesses"
                    className="w-1/2 sm:w-1/3 object-cover order-1 sm:order-2"
                  />
                  <div className="w-full sm:w-4/5 order-2 sm:order-1">
                    <div className="text-center sm:text-left text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-high-contrast-dark">
                      For Businesses
                    </div>
                    <div className="text-center md:px-0 px-6 sm:text-left leading-relaxed tracking-wide text-[1rem] sm:text-[1.25rem] lg:text-[1.5rem] font-medium text-high-contrast-dark">
                      Collabmaps simplifies finding content creators that are looking for collaborations, with a unique, location-based platform. 
                      <ul className="list-disc ml-[-17px] mr-0 mt-4 space-y-6">
                        <li>
                          <span className="font-semibold">Discover Local Influencers:</span> Easily find and connect with content creators in your area.
                        </li>
                        <li>
                          <span className="font-semibold">Streamline Collaborations:</span> View profiles, analyze metrics, and send messages all in one place.
                        </li>
                        <li>
                          <span className="font-semibold">Increase Brand Visibility:</span> Partner with influencers who resonate with your target audience to amplify your reach.
                        </li>
                      </ul>
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
      
    </div>
  );
};

export default DivcontainerWithImage;
