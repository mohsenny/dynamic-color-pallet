const drawHorizontalCircles = (colors, ctx, x, y, totalWidth, totalHeight) => {
  // Define the circle radius based on the height, ensuring they fit within the module
  const circleSpacing = -30; // Negative value for overlap
  const totalSpacing = circleSpacing * (colors.length - 1);
  const radius = (totalWidth - totalSpacing) / (colors.length * 2);

  colors.forEach((color, index) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    // Calculate x position of each circle, allowing for partial overlap
    const circleX = x + radius + index * (2 * radius + circleSpacing);
    ctx.arc(circleX, y + totalHeight / 2, radius, 0, Math.PI * 2);
    ctx.fill();
  });
};

module.exports = drawHorizontalCircles;
