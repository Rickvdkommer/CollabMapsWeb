import { useMemo, type CSSProperties } from "react";

type MessageDarkActiveType = {
  /** Style props */
  propHeight?: CSSProperties["height"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const MessageDarkActive = ({ propHeight, propAlignSelf }: any) => {
  const frameDivStyle = useMemo(() => ({ height: propHeight }), [propHeight]);
  const messagePreviewStyle = useMemo(
    () => ({ alignSelf: propAlignSelf }),
    [propAlignSelf]
  );

  return (
    <div className=" flex flex-col items-center justify-start pt-5 pb-5 pr-5 pl-5 gap-4 text-left text-sm font-poppins border-b border-solid border-gray-1000 sm:flex-wrap">
      <div className=" flex flex-row items-start justify-start gap-4 sm:flex-wrap">
        <div className="h-10 w-10 relative rounded bg-gray-700">
          <div className="absolute top-[-0.7rem] right-[-0.7rem] rounded-full bg-blue-200 w-4 h-4 z-10" />
        </div>
        <div className="flex-1 flex flex-row items-start justify-start py-0 pr-1 pl-0  gap-8 m:flex-wrap sm:gap-4">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="relative leading-5 font-medium">Dribbble Team</div>
            <div className=" flex flex-row items-start justify-start py-0 px-0 text-lg text-high-contrast">
              <div className="relative leading-6 font-medium">
                How are you getting on?
              </div>
            </div>
          </div>
          <div className="h-5 w-14 rounded bg-blue-200 flex flex-row items-center justify-center pt-1 pb-1 pr-1 pl-1  text-xs text-high-contrast">
            3:30 PM
          </div>
        </div>
      </div>
      <div
        className=" flex flex-row items-start justify-start text-xs"
        style={frameDivStyle}
      >
        <div
          className="w-full relative leading-4 inline-block "
          style={messagePreviewStyle}
        >
          Nulla pulvinar ex id orci tempor, id accumsan metus pretium. Proin
          mollis venenatis magn...
        </div>
      </div>
    </div>
  );
};

export default MessageDarkActive;
