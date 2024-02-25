import React, { useState, useEffect, useRef } from "react";
import "./Slider.css"; // Import CSS for styling
import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";
import img4 from "../Images/img4.png";

const Slider = () => {
  const sliderRef = useRef(null); // Reference to the slider container
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next index
      const nextIndex = currentIndex === 39 ? 0 : currentIndex + 1;
      setCurrentIndex(nextIndex);

      // Scroll the slider container to the right
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
        
        // Reset scrollLeft when reaching the end
        if (sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >= sliderRef.current.scrollWidth) {
          sliderRef.current.scrollLeft = 0;
        }
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup function
  }, [currentIndex]); // Re-run effect when currentIndex changes

  return (
    <div className="slider-outer-container">
      <div className="slider-container" ref={sliderRef}>
        {[
          img1, img2, img3, img4,
          img1, img2, img3, img4,
          img1, img2, img3, img4,
          img1, img2, img3, img4,
          img1, img2, img3, img4,
          img1, img2, img3, img4,
          img1, img2, img3, img4,
          img1, img2, img3, img4,
          img1, img2, img3, img4,
          img1, img2, img3, img4
        ].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide ${index}`}
            className={currentIndex === index ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
