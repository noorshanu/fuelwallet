import { useEffect, useRef } from "react";
import gsap from "gsap";

const CircularText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const textString = "✦ BUY 1FUEL NOW BEFORE THE NEXT PRICE INCREASE ";
    text.innerHTML = textString
      .split("")
      .map(
        (char, i) =>
          `<span style="position: absolute; left: 50%; transform-origin: 0 100px; transform: rotate(${
            i * 10.3
          }deg);">${char}</span>`
      )
      .join("");

    // GSAP rotation animation
    gsap.to(text, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="relative w-45 h-45 flex items-center justify-center">
      {/* Circular text */}
      <div ref={textRef} className="absolute w-full h-full text-[13px] text-white font-semibold uppercase"></div>

      {/* Arrow logo */}
      <div className="w-16 h-16 text-white rounded-full flex items-center justify-center">
        <span className="text-5xl -rotate-43">➜</span>
      </div>
    </div>
  );
};

export default CircularText;
