import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type DivwNodeC1eefbfbDc0dBfdType = {
  c61d40d657a62afd71f9dFeat?: string;
  personalisedEmailCrafting?: string;
  ourTechUsesAIToPersonalis?: string;

  /** Style props */
  propRowGap?: CSSProperties["rowGap"];
  propGap?: CSSProperties["gap"];
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
};

const DivwNodeC1eefbfbDc0dBfd: NextPage<DivwNodeC1eefbfbDc0dBfdType> = ({
  c61d40d657a62afd71f9dFeat,
  personalisedEmailCrafting,
  ourTechUsesAIToPersonalis,
  propRowGap,
  propGap,
  propPadding,
  propPadding1,
  propHeight,
}) => {
  const diviconBoxStyle: CSSProperties = useMemo(() => {
    return {
      rowGap: propRowGap,
      gap: propGap,
    };
  }, [propRowGap, propGap]);

  const divfeatureIconHolderStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const c61d40d657a62afd71f9dFeatureStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const ourTechUsesStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className="flex flex-col items-start justify-start py-[1.25rem] px-[0rem] gap-[0.88rem] text-left text-[1.53rem] text-high-contrast-dark font-poppins">
      <div className="flex flex-col items-start justify-start max-w-full">
        <div
          className="flex flex-col sm:flex-row sm:items-center justify-start [row-gap:20px] max-w-full"
          style={diviconBoxStyle}
        >
          <div
            className="flex flex-row items-start justify-start border-l-[2.3px] border-solid border-high-contrast-dark"
            style={divfeatureIconHolderStyle}
          >
            <div
              className="overflow-hidden flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] "
              style={c61d40d657a62afd71f9dFeatureStyle}
            >
              <div className="overflow-hidden flex flex-col items-center justify-center">
                <img
                  className="w-[1.68rem] h-[1.68rem] relative overflow-hidden"
                  loading="eager"
                  alt=""
                  src={c61d40d657a62afd71f9dFeat}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start max-w-full">
            <div className="relative leading-[2.45rem] capitalize inline-block">
              {personalisedEmailCrafting}
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.71rem] text-[1.02rem] text-gray-1100">
        <div className=" flex flex-col items-start justify-start">
          <div
            className=" relative leading-[1.64rem] flex"
            style={ourTechUsesStyle}
          >
            {ourTechUsesAIToPersonalis}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivwNodeC1eefbfbDc0dBfd;
