const { generateCanvas, saveCanvasToFile } = require("./src/canvasManager");
const getColors = require("./src/utils/colorReader");

const useRandomColors = process.argv.includes("--random");
const colors = getColors(useRandomColors);

const canvas = generateCanvas(colors);
saveCanvasToFile(canvas, "palette.png");
