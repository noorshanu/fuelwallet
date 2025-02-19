import { useEffect } from "react";

const StarsBackground = () => {
  useEffect(() => {
    const container = document.querySelector(".stars");
    const n = 75; // Number of stars

    for (let i = 0; i < n; i++) {
      let posX = Math.random() * 100 + "%";
      let posY = Math.random() * 100 + "%";
      let size = Math.random() * 3 + 1; // Ensure minimum size

      let star = document.createElement("div"); // Use "div" instead of "star"
      star.classList.add("star");
      star.style.height = `${size}px`;
      star.style.width = `${size}px`;
      star.style.top = posY;
      star.style.left = posX;
      star.style.boxShadow = `0 0 ${size + 2}px 1px rgba(255,255,255,0.2)`;

      container.appendChild(star);
    }
  }, []);

  return <div className="stars"></div>;
};

export default StarsBackground;
