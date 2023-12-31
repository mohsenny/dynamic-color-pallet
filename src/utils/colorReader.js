const fs = require("fs");
const path = require("path");

const generateUXFriendlyColors = (numColors) => {
  // Generate a random base hue for each palette
  const baseHue = Math.floor(Math.random() * 360);
  const hueIncrement = Math.floor(360 / numColors); // Ensures a wide range of hues

  let colors = [];

  for (let i = 0; i < numColors; i++) {
    // Adjust hue for each color to ensure variety
    const currentHue = (baseHue + i * hueIncrement) % 360;
    
    let adjustSaturation, adjustLightness;

    // Alternate between different saturation and lightness for contrast
    if (i % 2 === 0) {
      // More saturated and darker for contrast
      adjustSaturation = 70 + Math.floor(Math.random() * 30); // 70% to 100%
      adjustLightness = 20 + Math.floor(Math.random() * 40); // 20% to 60%
    } else {
      // Less saturated and lighter
      adjustSaturation = 30 + Math.floor(Math.random() * 40); // 30% to 70%
      adjustLightness = 60 + Math.floor(Math.random() * 40); // 60% to 100%
    }

    colors.push(`hsl(${currentHue}, ${adjustSaturation}%, ${adjustLightness}%)`);
  }

  return colors;
};

const readColorsFromFile = () => {
  const filePath = path.join(__dirname, "..", "assets", "colors.txt");
  const data = fs.readFileSync(filePath, "utf8");
  return data.split(/\r?\n/).filter((line) => line.startsWith("#"));
};

const getColors = (useRandomColors = false, numColors = 5) => {
  return useRandomColors ? generateUXFriendlyColors(numColors) : readColorsFromFile();
};

module.exports = getColors;
