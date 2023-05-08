const process = require('process');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'text.txt');
const ws = fs.createWriteStream(filePath);

process.stdout.write('what should I write down?\n');

function out() {
  process.stdout.write('Bye\n');
  process.exit();
}

process.stdin.on('data', data => {
  if (data.toString().trim() == 'exit') out();
  ws.write(data);
});

process.on('SIGINT', out);