const fs = require('fs');
const path = require('path');

async function main() {
  await fs.promises.mkdir(path.join(__dirname, 'project-dist'), { recursive: true });
  clear(path.join(__dirname, 'project-dist'));
  await fs.promises.mkdir(path.join(__dirname, 'project-dist'), { recursive: true });
  await fs.promises.mkdir(path.join(__dirname, 'project-dist', 'assets'), { recursive: true });
}
main()

async function copy(folder) {

}

async function clear(folder) {
  let list = await fs.promises.readdir(folder, { withFileTypes: true });
  for (let el of list) {
    if (el.isFile()) {
      await fs.promises.rm(path.join(folder, el.name));
    } else {
      try {
        await fs.promises.rmdir(path.join(folder, el.name));
      } catch (e) {
        await clear(path.join(folder, el.name));
      }
    }
  }
  list = await fs.promises.readdir(folder, { withFileTypes: true });
  if (list.length === 0) {
    await fs.promises.rmdir(folder);
  }
}