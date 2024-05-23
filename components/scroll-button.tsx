  // DivHeroScrollButtonHolder.tsx
  import React from 'react';

  const scrollToDivContainer = () => {
    console.log('Attempting to scroll to div-container'); // This should log in the console when the button is clicked
    const divContainerElement = document.getElementById('div-container');
    if (divContainerElement) {
      divContainerElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Element with ID div-container not found');
    }
  };

  const DivHeroScrollButtonHolder: React.FC = () => {
    return (
      <div
        onClick={scrollToDivContainer}
        className="cursor-pointer font-poppins rounded-[35.04px] shadow [background:linear-gradient(90deg,_#bcf5bc,_#fff)] flex items-center justify-center pt-[0.44rem] pb-[0.39rem] pr-[0.69rem] pl-[1.08rem] whitespace-nowrap border-[1.2px] border-solid border-high-contrast-dark"
      >
        <div className="relative text-sm font-medium">
          Get Access
        </div>
      </div>
    );
  };

  export default DivHeroScrollButtonHolder;
