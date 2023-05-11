const fs = require('fs');
const path = require('path');

const bundle = path.join(__dirname, 'project-dist', 'bundle.css')

async function main() {
  await fs.promises.writeFile(bundle, '');
  let ws = await fs.createWriteStream(bundle);
  fs.promises.truncate(bundle);
  const stylePath = path.join(__dirname, 'styles');
  let rs

  fs.readdir(stylePath, { withFileTypes: true }, async (err, files) => {
    for (let file of files) {
      if (file.isFile() && path.extname(file.name) === '.css') rs = await fs.createReadStream(path.join(stylePath, file.name), { encoding: 'UTF-8' });
      rs.on('data', chunk =>
        ws.write(chunk)
      );
    }
  });
}
main()