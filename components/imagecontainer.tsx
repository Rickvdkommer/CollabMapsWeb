import type { NextPage } from "next";
import FadeInOnScroll from "./FadeInOnScroll";

const ImageContainer: NextPage = () => {
  return (
    <FadeInOnScroll>
      {/* Show the screenshot */}
      <img
        className="select-none w-full pt-16"
        draggable="false"
        src={`/screenshot.png`}
      />
    </FadeInOnScroll>
  );
};

export default ImageContainer;
