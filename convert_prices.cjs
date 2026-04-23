const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'products.js');
let content = fs.readFileSync(filePath, 'utf-8');

// match "price": number,
const regex = /"price":\s*(\d+)/g;

content = content.replace(regex, (match, price) => {
  const newPrice = parseInt(price) * 83;
  return `"price": ${newPrice}`;
});

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Prices updated successfully!');
