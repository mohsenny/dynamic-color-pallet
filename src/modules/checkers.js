const drawCheckers = (colors, ctx, x, y, totalWidth, totalHeight) => {
  // Assuming a 6x6 grid as per the original code
  const numRowsAndCols = colors.length + 1;
  const squareSize = Math.min(totalWidth, totalHeight) / numRowsAndCols;

  for (let i = 0; i < numRowsAndCols; i++) {
    for (let j = 0; j < numRowsAndCols; j++) {
      const color = colors[(i + j) % colors.length];
      ctx.fillStyle = color;
      ctx.fillRect(
        x + j * squareSize, // Calculate x position based on column index
        y + i * squareSize, // Calculate y position based on row index
        squareSize, // The width of the square
        squareSize, // The height of the square
      );
    }
  }
};

module.exports = drawCheckers;
