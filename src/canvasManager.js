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

  // Set canvas background color
  ctx.fillStyle = "#CCCCCC"; // Replace with your desired color
  ctx.fillRect(0, 0, canvas.width, canvas.height);

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

const displayColorHexValues = (colors, ctx, startX, startY, spacing) => {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#000"; // Set text color (adjust if necessary)
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  colors.forEach((color, index) => {
    const x = startX;
    const y = startY + index * spacing;
    ctx.fillText(color, x, y);
  });
};

module.exports = { generateCanvas, saveCanvasToFile };
