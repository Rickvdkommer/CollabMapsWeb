import type { NextPage } from "next";
import FadeInOnScroll from "../components/FadeInOnScroll";
import Banner from "../components/banner";
import DivcenterText from "../components/divcenter-text";
import DivcenterText2 from "../components/divcenter-text2";
import Divcontainer from "../components/divcontainer";
import Divcontainer1 from "../components/divcontainer1";
import Divcontainer2 from "../components/divcontainer2";
import Divcontainer3 from "../components/divcontainer3";
import DivsmallFeaturesGrid from "../components/divsmall-features-grid";
import ImageContainer from "../components/imagecontainer";

const DesignV: NextPage = () => {
  return (
    <div className="relative bg-black flex flex-col items-center justify-start pt-0 px-0 pb-20 gap-16 overflow-hidden">
      <section className="w-full overflow-hidden flex flex-row items-center justify-center">
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-16 bg-[url('/655590ee57c6182e37c19332-backgroundglowp1600png@3x.png')] bg-cover bg-no-repeat bg-top w-full">
          <FadeInOnScroll>
            <Banner />
          </FadeInOnScroll>
          
          <Divcontainer2 />

          
          <DivcenterText2 />
          <Divcontainer3 />
          <div className="flex-1 overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-16 w-full">
          <DivcenterText />
          <FadeInOnScroll>
            <DivsmallFeaturesGrid />
          </FadeInOnScroll>
          </div>
          <ImageContainer />
        </div>
      </section>
      <section className="w-full overflow-hidden flex flex-row items-center justify-center">
       
      </section>

      <Divcontainer1 />

      <FadeInOnScroll>
        <Divcontainer />
      </FadeInOnScroll>
    </div>
  );
};

export default DesignV;
