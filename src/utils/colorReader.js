const fs = require("fs");
const path = require("path");

const generateRandomColors = (numColors) => {
  const randomColors = [];
  for (let i = 0; i < numColors; i++) {
    const color = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padEnd(6, "0")}`;
    randomColors.push(color);
  }
  return randomColors;
};

const readColorsFromFile = () => {
  const filePath = path.join(__dirname, "..", "assets", "colors.txt");
  const data = fs.readFileSync(filePath, "utf8");
  return data.split(/\r?\n/).filter((line) => line.startsWith("#"));
};

const getColors = (useRandomColors = false, numColors = 5) => {
  return useRandomColors
    ? generateRandomColors(numColors)
    : readColorsFromFile();
};

module.exports = getColors;
