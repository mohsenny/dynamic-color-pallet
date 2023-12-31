const drawRandomCheckers = (colors, ctx, x, y, totalWidth, totalHeight) => {
  const squareSize = Math.min(totalWidth, totalHeight) / colors.length;

  for (let row = 0; row < colors.length; row++) {
    for (let col = 0; col < colors.length; col++) {
      ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
      ctx.fillRect(x + col * squareSize, y + row * squareSize, squareSize, squareSize);
    }
  }
};

module.exports = drawRandomCheckers;
