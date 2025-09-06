const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 72, 96, 128, 144, 152, 180, 192, 384, 512];

async function generateIcons() {
  const svgBuffer = fs.readFileSync(path.join(__dirname, '../public/logo.svg'));
  
  for (const size of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(__dirname, `../public/icon-${size}x${size}.png`));
    
    console.log(`Generated icon-${size}x${size}.png`);
  }
  
  // Generate Apple Touch Icon
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(__dirname, '../public/apple-icon-180x180.png'));
  
  console.log('Generated apple-icon-180x180.png');
  
  // Generate favicon.ico (multi-resolution)
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(__dirname, '../public/favicon-32x32.png'));
    
  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile(path.join(__dirname, '../public/favicon-16x16.png'));
    
  console.log('Generated favicon files');
  
  // Generate OG Image (1200x630 for social media)
  const ogCanvas = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="black"/>
      <text x="600" y="280" font-family="serif" font-size="72" fill="white" text-anchor="middle">AETHERION</text>
      <text x="600" y="350" font-family="sans-serif" font-size="32" fill="white" text-anchor="middle" opacity="0.8">Investment Partners</text>
      <line x1="400" y1="380" x2="800" y2="380" stroke="white" stroke-width="1" opacity="0.3"/>
    </svg>
  `);
  
  await sharp(ogCanvas)
    .png()
    .toFile(path.join(__dirname, '../public/og-image.png'));
  
  console.log('Generated og-image.png');
  
  console.log('All icons generated successfully!');
}

generateIcons().catch(console.error);