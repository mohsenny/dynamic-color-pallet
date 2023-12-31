const drawCirclePalette = (colors, ctx, x, y, totalWidth, totalHeight) => {
  // The largest circle should have a radius that is half the size of the module
  const maxRadius = Math.min(totalWidth, totalHeight) / 2;

  // Start with the largest circle and draw inwards
  colors.forEach((color, index) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    // Subtract the index from colors.length to start with the largest circle
    const radius = (maxRadius * (colors.length - index)) / colors.length;
    ctx.arc(x + totalWidth / 4, y + totalHeight / 4, radius, 0, Math.PI * 2);
    ctx.fill();
  });
};

module.exports = drawCirclePalette;
