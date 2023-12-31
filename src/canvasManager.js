const { createCanvas } = require('canvas');
const drawHorizontalStrip = require('./modules/horizontalStrip');
const drawHorizontalCircles = require('./modules/horizontalCircles');
const drawCheckers = require('./modules/checkers');
const drawRandomCheckers = require('./modules/randomCheckers');
const drawCirclePalette = require('./modules/circlePalette');
const drawRandomBlob = require('./modules/randomBlob');
const path = require('path');
const fs = require('fs');

const generateCanvas = (colors) => {
  // Dynamic canvas size based on number of colors
  const rows = 3;
  const cols = 2;
  const padding = 30; // Padding around the modules
  const spacing = 30; // Spacing between modules

  // Dynamic canvas size based on number of colors
  const baseWidth = 200; // Base width for 3 colors
  const baseHeight = 250; // Base height for 3 colors
  const extraWidthPerColor = 200; // Additional width per color
  const extraHeightPerColor = 150; // Additional height per color

  const canvasWidth = baseWidth + extraWidthPerColor * (colors.length - 3);
  const canvasHeight = baseHeight + extraHeightPerColor * (colors.length - 3);

  // Calculate the module size based on the canvas and number of rows and columns
  const moduleWidth = (canvasWidth - padding * (cols + 1)) / cols;
  const moduleHeight = (canvasHeight - padding * (rows + 1)) / rows;

  // Adjust the module positions to prevent overlapping
  const moduleYOffset = moduleHeight + spacing + padding; // Offset for the y-coordinate

  // Adjust the y position for the color hex values
  // This will place them below the last row of modules, within the 200px added to the canvas height
  const hexValuesYPosition = canvasHeight + padding; // Adjust this value as needed to fit within the extra space

  // The addiotional 200px is to accomodate the colors hex at the bottom
  const canvas = createCanvas(canvasWidth, canvasHeight + 200);
  const ctx = canvas.getContext('2d');

  // Draw checker pattern background
  const squareSize = 50;
  const color1 = '#f5f5f5';
  const color2 = '#e0e0e0';
  drawCheckerPatternBackground(ctx, canvas.width, canvas.height, squareSize, color1, color2);

  // Module #1: Horizontal Strip
  drawHorizontalStrip(colors, ctx, padding, padding, moduleWidth, moduleHeight);

  // Module #2: Horizontal Circles
  drawHorizontalCircles(colors, ctx, moduleWidth + 2 * padding, padding, moduleWidth, moduleHeight);

  // Module #3: Checkers
  drawCheckers(colors, ctx, padding, moduleYOffset, moduleWidth, moduleHeight);

  // Module #4: Random Checkers
  drawRandomCheckers(colors, ctx, moduleWidth + 2 * padding, moduleYOffset, moduleWidth, moduleHeight);

  // Module #5: Nested Circles
  drawCirclePalette(colors, ctx, padding, 2 * moduleYOffset, moduleWidth, moduleHeight);

  // Module #6: Blob
  drawRandomBlob(colors, ctx, moduleWidth + 2 * padding, 2 * moduleYOffset, moduleWidth, moduleHeight);

  // Display color hex values
  displayColorHexValues(colors, ctx, padding, hexValuesYPosition, 20); // Spacing of 20 between hex values

  return canvas;
};

const saveCanvasToFile = (canvas, filename) => {
  try {
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(path.join(__dirname, '..', 'output', filename), buffer);
  } catch (error) {
    console.error('Error in saveCanvasToFile:', error);
  }
};

const hslToHex = (hsl) => {
  let [h, s, l] = hsl.match(/\d+/g).map(Number); // Ensure h, s, and l are numbers

  l /= 100;
  s /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

const displayColorHexValues = (colors, ctx, startX, startY, lineSpacing) => {
  ctx.font = '16px Arial';
  ctx.fillStyle = '#000'; // Set text color (adjust if necessary)
  ctx.textAlign = 'left'; // Align text to the left
  ctx.textBaseline = 'top'; // Align text to the top

  colors.forEach((color, index) => {
    const x = startX;
    const y = startY + index * lineSpacing;
    const hexColor = color.startsWith('hsl') ? hslToHex(color) : color; // Convert to hex if in HSL
    ctx.fillText(hexColor.toUpperCase(), x, y); // Display in uppercase for consistency
  });
};

const drawCheckerPatternBackground = (ctx, canvasWidth, canvasHeight, squareSize, color1, color2) => {
  for (let y = 0; y < canvasHeight; y += squareSize) {
    for (let x = 0; x < canvasWidth; x += squareSize) {
      ctx.fillStyle = (x / squareSize + y / squareSize) % 2 === 0 ? color1 : color2;
      ctx.fillRect(x, y, squareSize, squareSize);
    }
  }
};

module.exports = { generateCanvas, saveCanvasToFile };
