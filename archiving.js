const fs = require('fs');
const archiving = require('archiver');

const output = fs.createWriteStream('constructor.zip');
const archive = archiving('zip', {
  zlib: {
    level: 9,
  },
});

archive.pipe(output);

archive.directory('dist');
archive.directory('src');
archive.file('.editorconfig');
archive.file('.gitignore');
archive.file('archiving.js');
archive.file('package.json');
archive.file('package-lock.json');
archive.file('webpack.config.js');

archive.finalize();
