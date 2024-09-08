import React, { useEffect, useState } from 'react';
import './RipplingLoader.css'; // Import the CSS file

const RipplingLoader = () => {
  const [debounce, setDebounce] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!debounce) {
        setDebounce(true);
        loaderAnimate();
        createWave();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [debounce]);

  const loaderAnimate = () => {
    setDebounce(false);
  };

  const createWave = () => {
    const wave = document.createElement('div');
    wave.classList.add('wave');
    document.body.appendChild(wave);
    setTimeout(() => {
      wave.remove();
    }, 7000);
  };

  return (
    <div className="loader_center">
      <div className="content">💬</div>
    </div>
  );
};

export default RipplingLoader;
