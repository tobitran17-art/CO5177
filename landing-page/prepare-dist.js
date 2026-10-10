var fs = require('fs');
var path = require('path');

function copy(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

copy('index.html', path.join('dist', 'index.html'));
copy('assignment-vne-v4.pdf', path.join('dist', 'assignment-vne-v4.pdf'));
copy(path.join('tabular', 'index.html'), path.join('dist', 'tabular', 'index.html'));
