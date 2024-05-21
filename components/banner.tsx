import type { NextPage } from "next";
import DivHeroScrollButtonHolder from './scroll-button';


const Banner: NextPage = () => {
  return (
    <header className="max-w-6xl w-full flex items-center justify-between pt-0 px-4 pb-1 text-center text-base text-black font-poppins">
    {/* "YourLeads" image on the left */}
    
      <div className="flex items-center justify-between w-full pt-4">
        <div className="flex justify-start">
          <img
            className="h-16"
            loading="eager"
            alt="YourLeads"
            src="/YourLeads-01.svg"
          />
        </div>

        {/* Logo in the center */}
        <div className="flex justify-center">
          <img
            className="h-16"
            loading="eager"
            alt="Logo"
            src="/favicon.svg"
          />
        </div>

        {/* "Join the Beta" button on the right */}
        <div className="flex justify-end">
          <div>
            <DivHeroScrollButtonHolder />
          </div>
        </div>
      </div>
    </header>

  );
};

export default Banner;
