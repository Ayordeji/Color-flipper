import React, { useState } from "react";
import "./App.css";

const ColorFlipper = () => {
  const colors = [
    { name: "Red", hex: "#FF0000" },
    { name: "Green", hex: "#00FF00" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Purple", hex: "#800080" },
    { name: "Amethyst", hex: "#9966CC" },
    { name: "Aqua", hex: "#00FFFF" },
    { name: "Azure", hex: "#007FFF" },
    { name: "Beige", hex: "#F5F5DC" },
    { name: "Chocolate", hex: "#D2691E" },
    { name: "Cyan", hex: "#00FFFF" },
    { name: "Fuchsia", hex: "#FF00FF" },
    { name: "Gainsboro", hex: "#DCDCDC" },
    { name: "Khaki", hex: "#F0E68C" },
    { name: "Lime", hex: "#00FF00" },
    { name: "Magenta", hex: "#FF00FF" },
    { name: "Olive", hex: "#808000" },
    { name: "Orange", hex: "#FFA500" },
    { name: "Orchid", hex: "#DA70D6" },
    { name: "Periwinkle", hex: "#CCCCFF" },
    { name: "Plum", hex: "#DDA0DD" },
    { name: "Salmon", hex: "#FA8072" },
    { name: "Sienna", hex: "#A0522D" },
    { name: "Thistle", hex: "#D8BFD8" },
    { name: "Violet", hex: "#EE82EE" },
  ];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [showHex, setShowHex] = useState(false);

  const changeColor = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    setShowHex(false);
  };

  const toggleShowHex = () => {
    setShowHex(true);
  };

  const currentColor = colors[currentColorIndex];

  return (
    <div className="color-flipper">
      <div className="color-display" style={{ backgroundColor: currentColor.hex }}>
        <p>Background Color: {currentColor.name}</p>
        <div className="button-container">
          <button className="change-color-btn" onClick={changeColor}>
            Change Color
          </button>
          <button className="show-hex-btn" onClick={toggleShowHex}>
            Show Hex Code
          </button>
        </div>
        {showHex && <p>{currentColor.hex}</p>}
      </div>
    </div>
  );
};

export default ColorFlipper;
