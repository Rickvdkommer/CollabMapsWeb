import type { NextPage } from "next";
import FadeInOnScroll from "./FadeInOnScroll";
import DivheroButtonsHolder from "./divhero-buttons-holder";

const Divcontainer2: NextPage = () => {
  return (
    <div className="mx-auto pb-0 max-w-6xl border-box w-full flex flex-col pt-[16rem] sm:pt-[6rem] items-center justify-start py-[1.06rem] sm:py-[2.06rem] gap-[2rem] z-[1] mt-[-0.75rem] text-center text-[2.75rem] sm:text-[3.5rem] lg:text-[4.53rem] text-high-contrast-dark font-poppins">
      <div className="flex flex-col items-start justify-start">
        <div className=" flex flex-row items-center justify-center ">
          <div className="flex-1 flex flex-col items-center justify-start gap-0 sm:px-4 overflow-hidden">
            <div className="flex flex-col items-center justify-start sm:gap-[0.73rem] ">
              <FadeInOnScroll>
                
              </FadeInOnScroll>
              <FadeInOnScroll>
                <div className=" flex flex-col w-full items-center justify-start pt-[5rem] sm:pt-[6rem] sm:px-[1.25rem] pb-[0.01rem]  ">
                  <div className="relative text-transparent flex items-center ">
                    <img src="/favicon.png" alt="Logo" className="h-12 md:h-14 mb-2 md:mb-0 -mr-1" />

                    <span className="font-quicksand w-full gap-0 leading-tight text-right py-0 px-4">
                      <b className="text-[#FE920C]">Collab</b>
                      <b className="text-[#2A8F44]">Maps</b>
                      
                      <i className="font-poppins "></i>
                      <br></br>
                      <span className="font-poppins">{``}</span>
                      <span className="font-medium">
                        {``}
                        </span>
                    </span>
                  </div>
                </div>
              </FadeInOnScroll>
            </div>
            <div className="relative flex flex-col w-full items-center justify-start gap-[2.19rem] text-[1.17rem]">
              <div className="flex flex-col items-start justify-start gap-0">
                <FadeInOnScroll>
                  <div className="flex flex-col w-full items-center justify-start py-0 px-7">
                    <div className="font-poppins relative leading-[1.87rem] md:leading-[1.87rem] flex !bg-clip-text [background:linear-gradient(150deg,_#FF7900_30%,#2A8F44)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] items-start py-0 md:py-4">
                    <p className="mt-0 max-w-[25rem] pt-[1rem] sm:pt-[0rem] text-center tracking-wider">
                    Connecting Content Creators and Businesses Effortlessly.
                    </p>

                    

                    </div>

                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                  <div className="mq450:hidden flex flex-col items-center justify-start py-0 px-7">
                    <div className="relative leading-[1.87rem] flex items-center">
                      
                    </div>
                  </div>{" "}
                </FadeInOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl flex flex-col items-center justify-start pt-[rem] sm:pb-[4rem] pb-[8rem] sm:pr-[2.06rem] sm:pl-[2rem]  gap-[3.63rem] text-center text-[0.17rem] text-high-contrast-dark font-poppins">
        <FadeInOnScroll>
          <DivheroButtonsHolder
            joinTheBetaList="Get FREE Early Access"
            propWidth="44.27rem"
          />
        </FadeInOnScroll>
      </div>
    </div>
  );
};

export default Divcontainer2;
