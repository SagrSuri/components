import React, { useEffect, useRef } from 'react';
import './Rippling.css'; // Import the CSS file

const Loader = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    let debounce = false;

    const loaderAnimate = () => {
      if (debounce) return;
      debounce = true;
      if (loaderRef.current) {
        loaderRef.current.classList.add('clicked');
        setTimeout(() => {
          if (loaderRef.current) {
            loaderRef.current.classList.remove('clicked');
            debounce = false;
          }
        }, 700);
      }
    };

    const createWave = () => {
      const wave = document.createElement('div');
      wave.classList.add('wave');
      document.body.appendChild(wave);
      setTimeout(() => {
        wave.remove();
      }, 7000);
    };

    const intervalId = setInterval(() => {
      loaderAnimate();
      createWave();
    }, 1000);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="loader_center" ref={loaderRef}>
      <div className="content">💬</div>
    </div>
  );
};

export default Loader;
