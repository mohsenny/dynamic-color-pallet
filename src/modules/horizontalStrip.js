const drawHorizontalStrip = (colors, ctx, x, y, totalWidth, totalHeight) => {
  const colorWidth = totalWidth / colors.length; // Width of each color strip
  const height = totalHeight; // Height of the strip

  for (let index = 0; index < colors.length; index++) {
    ctx.fillStyle = colors[index];
    ctx.fillRect(x + index * colorWidth, y, colorWidth, height);
  }
};

module.exports = drawHorizontalStrip;
