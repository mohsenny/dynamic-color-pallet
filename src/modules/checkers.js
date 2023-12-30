const drawCheckers = (colors, ctx, x, y) => {
  const squareSize = 50;
  for (let i = 0; i < colors.length + 1; i++) {
    // 6x6 grid
    for (let j = 0; j < colors.length + 1; j++) {
      const color = colors[(i + j) % colors.length];
      ctx.fillStyle = color;
      ctx.fillRect(
        x + j * squareSize,
        y + i * squareSize,
        squareSize,
        squareSize,
      );
    }
  }
};

module.exports = drawCheckers;
