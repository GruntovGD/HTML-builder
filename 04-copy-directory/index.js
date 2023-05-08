const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, err => {
  fs.readdir(path.join(__dirname, 'files-copy'), (err, files) => {
    for (let file of files) {
      fs.rm(path.join(__dirname, 'files-copy', file), er => fs.readdir(path.join(__dirname, 'files'), (err, files) => files.forEach(file => {
        fs.promises.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files-copy', file))
      })));
    };
  })
})