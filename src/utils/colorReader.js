const fs = require("fs");
const path = require("path");

// const generateRandomColors = (numColors) => {
//   const randomColors = [];
//   for (let i = 0; i < numColors; i++) {
//     const color = `#${Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padEnd(6, "0")}`;
//     randomColors.push(color);
//   }
//   return randomColors;
// };

const generateSplitComplementaryColors = (numColors) => {
  // Generate a random base hue between 0 and 360
  const baseHue = Math.floor(Math.random() * 360);
  
  // Define a base saturation and lightness value
  // Avoiding too high or too low values that result in greys or overly vibrant colors
  const baseSaturation = Math.floor(Math.random() * 50) + 30; // Saturation between 30% and 80%
  const baseLightness = Math.floor(Math.random() * 40) + 30; // Lightness between 30% and 70%

  let colors = [`hsl(${baseHue}, ${baseSaturation}%, ${baseLightness}%)`];

  // Calculate the split complementary hues
  const splitHue1 = (baseHue + 150) % 360;
  const splitHue2 = (baseHue + 210) % 360;

  colors.push(`hsl(${splitHue1}, ${baseSaturation}%, ${baseLightness}%)`);
  colors.push(`hsl(${splitHue2}, ${baseSaturation}%, ${baseLightness}%)`);

  // Generate additional colors by adjusting saturation and lightness
  for (let i = 3; i < numColors; i++) {
    // Adjust the base values to get a variety of colors
    const adjustSaturation = (baseSaturation + 20 * (i % 2)) % 100;
    const adjustLightness = (baseLightness + 20 * ((i + 1) % 2)) % 100;

    const newHue = (baseHue + i * 30) % 360;
    colors.push(`hsl(${newHue}, ${adjustSaturation}%, ${adjustLightness}%)`);
  }

  return colors;
};

const readColorsFromFile = () => {
  const filePath = path.join(__dirname, "..", "assets", "colors.txt");
  const data = fs.readFileSync(filePath, "utf8");
  return data.split(/\r?\n/).filter((line) => line.startsWith("#"));
};

const getColors = (useRandomColors = false, numColors = 5) => {
  return useRandomColors ? generateSplitComplementaryColors(numColors) : readColorsFromFile();

};

module.exports = getColors;
