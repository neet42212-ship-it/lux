const fs = require('fs');

async function checkUrls() {
  const content = fs.readFileSync('src/data/products.js', 'utf-8');
  const urls = [...content.matchAll(/https:\/\/images\.unsplash\.com\/[^"']+/g)].map(m => m[0]);
  const uniqueUrls = [...new Set(urls)];

  console.log('Checking ' + uniqueUrls.length + ' unique URLs...');
  for (const url of uniqueUrls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (!res.ok) {
        console.log('BAD URL [' + res.status + ']: ' + url);
      } else {
        console.log('OK: ' + url);
      }
    } catch(e) {
      console.log('ERROR [' + e.message + ']: ' + url);
    }
  }
}
checkUrls();
