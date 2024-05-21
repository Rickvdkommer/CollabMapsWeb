import type { NextPage } from "next";
import FadeInOnScroll from "./FadeInOnScroll";
import DivheroButtonsHolder from "./divhero-buttons-holder";

const Divcontainer2: NextPage = () => {
  return (
    <div className="mx-auto pb-20 max-w-6xl border-box w-full flex flex-col items-center justify-start py-[2.06rem] gap-[4rem] z-[1] mt-[-0.75rem] text-center text-[2.75rem] sm:text-[3.5rem] lg:text-[4.53rem] text-high-contrast-dark font-poppins">
      <div className="flex flex-col items-start justify-start">
        <div className=" flex flex-row items-center justify-center ">
          <div className="flex-1 flex flex-col items-center justify-start gap-7 sm:px-4 overflow-hidden">
            <div className="flex flex-col items-center justify-start gap-[0.73rem] ">
              <FadeInOnScroll>
                
              </FadeInOnScroll>
              <FadeInOnScroll>
                <div className=" flex flex-col w-full items-center justify-start pt-[6rem] sm:px-[1.25rem] pb-[0.01rem]  ">
                  <div className="relative text-transparent !bg-clip-text [background:linear-gradient(120deg,_#111_30%,grey)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center ">
                    <span className="w-full gap-0 leading-tight text-right py-0 px-7">
                      <b>CollabMaps</b>
                      
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
              <div className="flex flex-col items-start justify-start gap-4">
                <FadeInOnScroll>
                  <div className="flex flex-col w-full items-center justify-start py-0 px-7">
                    <div className="relative leading-[1.87rem] flex !bg-clip-text [background:linear-gradient(150deg,_#FF7900_30%,orange)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] items-center">
                      
                      <br>
                      </br> The platform that matches Content creators and Businesses.
                      
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
      <div className="w-full max-w-4xl flex flex-col items-center justify-start pb-[2rem] sm:pr-[2.06rem] sm:pl-[2rem]  gap-[3.63rem] text-center text-[1.17rem] text-high-contrast-dark font-poppins">
        <FadeInOnScroll>
          <DivheroButtonsHolder
            joinTheBetaList="Join Beta"
            propWidth="44.27rem"
          />
        </FadeInOnScroll>
      </div>
    </div>
  );
};

export default Divcontainer2;
