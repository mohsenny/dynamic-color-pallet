const drawRandomBlob = (colors, ctx, x, y) => {
  for (let i = 0; i < 80; i++) {
    ctx.beginPath();
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.fillStyle = color;
    ctx.globalAlpha = 1.0;
    const radius = Math.random() * 40 + 10;
    const cx = x + Math.random() * 200;
    const cy = y + Math.random() * 150;
    ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
    ctx.fill();
  }
  ctx.globalAlpha = 1.0; // Resetting alpha to default
};

module.exports = drawRandomBlob;
