const drawHorizontalCircles = (colors, ctx, startX, y, radius) => {
  let x = startX;

  colors.forEach((color) => {
    ctx.beginPath();
    x += radius * 1.3; // Move to the right for the next circle, with 30% overlap
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  });
};

module.exports = drawHorizontalCircles;
