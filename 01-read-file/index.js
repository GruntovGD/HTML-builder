const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'text.txt');
const readstram = fs.createReadStream(filePath, { encoding: 'UTF-8' });

readstram.on('data', chunk =>
  console.log(chunk)
);