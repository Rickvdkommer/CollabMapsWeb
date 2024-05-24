import { useEffect, useRef, useState } from "react";

const FadeInOnScroll = ({ children }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<any>();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });
    const refCurrent = domRef.current;
    observer.observe(refCurrent);
    return () => observer.unobserve(refCurrent);
  }, []);

  return (
    <div
      className={`relative w-full transition-opacity duration-1000 flex justify-center overflow-hidden text-wrap ${
        isVisible ? "opacity-100 animate-fadeIn" : "opacity-0"
      }`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
