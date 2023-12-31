const { generateCanvas, saveCanvasToFile } = require('./src/canvasManager');
const getColors = require('./src/utils/colorReader');

const useRandomColors = process.argv.includes('--random');
const countIndex = process.argv.indexOf('--count');
const colors = getColors(useRandomColors, countIndex);

const canvas = generateCanvas(colors);
saveCanvasToFile(canvas, 'palette.png');
