"use client"
import React, { useState } from 'react';

const ColorChangingButton = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Initial color

  const handleClick = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setBackgroundColor(randomColor);

    // Change body background color
    document.body.style.backgroundColor = randomColor;
  };

  return (
    <div>
      <button onClick={handleClick}>Change Background Color</button>
    </div>
  );
};

export default ColorChangingButton;
