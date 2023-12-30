const drawCirclePalette = (colors, ctx, radius, x, y) => {
  const radiusDecrement = radius / colors.length; // Decrement for each inner circle

  colors.forEach((color) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    radius -= radiusDecrement; // Reduce the radius for the next circle
  });
};

module.exports = drawCirclePalette;
