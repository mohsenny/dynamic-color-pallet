const { createCanvas } = require("canvas");
const drawHorizontalStrip = require("./modules/horizontalStrip");
const drawHorizontalCircles = require("./modules/horizontalCircles");
const drawCheckers = require("./modules/checkers");
const drawRandomCheckers = require("./modules/randomCheckers");
const drawCirclePalette = require("./modules/circlePalette");
const drawRandomBlob = require("./modules/randomBlob");
const path = require("path");
const fs = require("fs");

const generateCanvas = (colors) => {
  const canvas = createCanvas(800, 1000);
  const ctx = canvas.getContext("2d");

  // Draw checker pattern background with subtle colors
  const squareSize = 50; // Example size, adjust as needed
  const color1 = '#f5f5f5'; // Light muted shade
  const color2 = '#e0e0e0'; // Darker muted shade
  drawCheckerPatternBackground(ctx, canvas.width, canvas.height, squareSize, color1, color2);

  const overlappingCircleRadius = 40;
  const bigCircleRadius = 120;
  drawHorizontalStrip(colors, ctx, 10, 10);
  drawHorizontalCircles(
    colors,
    ctx,
    410,
    10 + overlappingCircleRadius / 1,
    overlappingCircleRadius,
  ); // Adjust radius and position for visibility
  drawCheckers(colors, ctx, 10, 210);
  drawRandomCheckers(colors, ctx, 410, 210, 600, 600);
  drawCirclePalette(
    colors,
    ctx,
    bigCircleRadius,
    bigCircleRadius / 10 + bigCircleRadius,
    600 + bigCircleRadius,
  );
  drawRandomBlob(colors, ctx, 410, 610);

  displayColorHexValues(colors, ctx, 50, 850, 30);

  return canvas;
};

const saveCanvasToFile = (canvas, filename) => {
  try {
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(path.join(__dirname, "..", "output", filename), buffer);
  } catch (error) {
    console.error("Error in saveCanvasToFile:", error);
  }
};

const hslToHex = (hsl) => {
    let [h, s, l] = hsl.match(/\d+/g).map(Number); // Ensure h, s, and l are numbers
  
    l /= 100;
    s /= 100;
    const a = s * Math.min(l, 1 - l);
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };
  
const displayColorHexValues = (colors, ctx, startX, startY, spacing) => {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000"; // Set text color (adjust if necessary)
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
  
    colors.forEach((color, index) => {
      const x = startX;
      const y = startY + index * spacing;
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
