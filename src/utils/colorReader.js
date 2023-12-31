const fs = require("fs");
const path = require("path");

const generateUXFriendlyColors = (numColors) => {
  const baseHue = Math.floor(Math.random() * 360);
  const hueIncrement = Math.floor(360 / numColors);

  let colors = [];

  for (let i = 0; i < numColors; i++) {
    const currentHue = (baseHue + i * hueIncrement) % 360;
    let adjustSaturation, adjustLightness;
    let colorType = Math.floor(Math.random() * 3); // Randomly select color type

    // Define a variable range for randomness
    let randomRange = Math.floor(Math.random() * 10) + 35; // Range between 35 and 45

    switch (colorType) {
      case 0: // Bold
        adjustSaturation = 60 + Math.floor(Math.random() * randomRange); // 60% to 100%
        adjustLightness = 30 + Math.floor(Math.random() * randomRange); // 30% to 100%
        break;
      case 1: // Pastel
        adjustSaturation = 20 + Math.floor(Math.random() * randomRange); // 20% to 60%
        adjustLightness = 70 + Math.floor(Math.random() * randomRange); // 70% to 100%
        break;
      default: // Completely random
        adjustSaturation = Math.floor(Math.random() * 100); // 0% to 100%
        adjustLightness = Math.floor(Math.random() * 100); // 0% to 100%
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
