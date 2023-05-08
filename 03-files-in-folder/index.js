const fs = require('fs');
let path = require('path');
const foldPath = path.join(__dirname, 'secret-folder');
fs.readdir(foldPath, { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  for (let file of files) {
    if (file.isFile()) {      
      fs.stat(path.join(foldPath, file.name), (err, stats) => console.log(`${file.name.split('.')[0]} - ${path.extname(file.name).slice(1)} - ${stats.size}b`))
    }
  }
});
