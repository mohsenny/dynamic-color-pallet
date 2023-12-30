const { generateCanvas, saveCanvasToFile } = require("./src/canvasManager");
const getColors = require("./src/utils/colorReader");

const useRandomColors = process.argv.includes("--random");
const numColors = 5; // Define how many colors you want to generate
const colors = getColors(useRandomColors, numColors);

const canvas = generateCanvas(colors);
saveCanvasToFile(canvas, "palette.png");
