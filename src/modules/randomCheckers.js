const drawRandomCheckers = (colors, ctx, x, y, canvasWidth, canvasHeight) => {
  const squareSize = 50;
  const rows = Math.floor(canvasHeight / squareSize);
  const columns = Math.floor(canvasWidth / squareSize);

  for (let row = 0; row < colors.length + 1; row++) {
    for (let col = 0; col < colors.length + 1; col++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      ctx.fillStyle = color;
      const posX = x + col * squareSize;
      const posY = y + row * squareSize;
      ctx.fillRect(posX, posY, squareSize, squareSize);
    }
  }
};

module.exports = drawRandomCheckers;
