import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed z-[100] bottom-4 right-4 md:right-8">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 rounded-[5px] border-2 border-solid border-red  bg-red text-[white] shadow-md hover:bg-[white] hover:text-[red] transition duration-300"
        >
          <FaArrowUp/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
