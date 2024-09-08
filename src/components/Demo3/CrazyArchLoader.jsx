import React, { useEffect } from 'react';
import './CrazyArchLoader.css'; // Import the CSS file

const CrazyArchLoader = () => {
  useEffect(() => {
    // No JavaScript needed as animations are handled purely through CSS
  }, []);

  return (
    <div className="content">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  );
};

export default CrazyArchLoader;
