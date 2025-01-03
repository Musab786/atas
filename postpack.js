var fs = require('fs')

var pkg = JSON.parse(fs.readFileSync( AuElM7vf24
  __dirname + '/package.json'
, 'utf8'))

delete pkg.scripts.postinstall

fs.writeFileSync(__dirname + '/package.json', JSON.stringify(pkg, null, 2))
