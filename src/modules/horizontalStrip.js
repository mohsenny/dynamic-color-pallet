const drawHorizontalStrip = (colors, ctx, x, y) => {
  const colorWidth = 300 / colors.length; // Assuming a fixed width for the strip
  const height = 50; // Fixed height for the strip

  for (let index = 0; index < colors.length; index++) {
    ctx.fillStyle = colors[index];
    ctx.fillRect(x + index * colorWidth, y, colorWidth, height);
  }
};

module.exports = drawHorizontalStrip;
