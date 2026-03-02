const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// file extensions to convert
const exts = ['.jpg', '.jpeg', '.jfif', '.png', '.gif'];

// collect metadata for generated files
const metadata = {};

async function processDir(dir) {
  const entries = fs.readdirSync(dir);
  for (const file of entries) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      await processDir(full);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (exts.includes(ext)) {
        const base = path.basename(file, ext);
        const newName = base + '.webp';
        const newPath = path.join(dir, newName);
        if (fs.existsSync(newPath)) {
          // already converted - delete original
          fs.unlinkSync(full);
        } else {
          try {
            await sharp(full).webp({ quality: 80 }).toFile(newPath);
            console.log(`converted ${full} -> ${newName}`);
            fs.unlinkSync(full);
          } catch (err) {
            console.error(`error converting ${full}:`, err);
          }
        }
      }
    }
  }
}

async function collectMetadata(dir) {
  const entries = fs.readdirSync(dir);
  for (const file of entries) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      await collectMetadata(full);
    } else {
      if (path.extname(file).toLowerCase() === '.webp') {
        try {
          const info = await sharp(full).metadata();
          metadata[file] = { width: info.width, height: info.height };
        } catch (err) {
          console.error(`failed metadata for ${full}:`, err);
        }
      }
    }
  }
}

(async () => {
  const assetsDir = path.resolve(__dirname, '../src/assets');
  await processDir(assetsDir);
  await collectMetadata(path.join(assetsDir, 'images'));
  await collectMetadata(path.join(assetsDir, 'homeImages'));

  // write metadata file
  const outPath = path.join(assetsDir, 'imageMetadata.js');
  const content = 'export default ' + JSON.stringify(metadata, null, 2) + ';\n';
  fs.writeFileSync(outPath, content);
  console.log('image metadata generated at', outPath);
})();
