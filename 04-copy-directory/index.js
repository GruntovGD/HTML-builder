const fs = require('fs');
const path = require('path');

copy()
async function copy() {
  const copyPath = path.join(__dirname, 'files-copy');
  const basePath = path.join(__dirname, 'files');
  await fs.promises.mkdir(copyPath, { recursive: true });
  let copyDir = await fs.promises.readdir(copyPath);
  for (let file of copyDir) {
    await fs.promises.rm(path.join(copyPath, file));
  }
  let dir = await fs.promises.readdir(basePath);
  dir.forEach(file => fs.promises.copyFile(path.join(basePath, file), path.join(copyPath, file)))
}