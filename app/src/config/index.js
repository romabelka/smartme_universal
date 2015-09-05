var nconf = require('nconf'),
    path = require('path');

nconf.argv()
    .env()
    .file({file: path.join(__dirname, 'config.json')})
    .file('custom', {file: path.join(__dirname, process.env.NODE_ENV + '.json')});

module.exports = nconf;