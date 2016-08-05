'use strict';

const Path = require('fire-path');
const Fs = require('fire-fs');

module.exports = {
  messages: {
    'editor:build-finished' (event, opts) {
        var destPath = Path.join(opts.dest, opts.platform);
        var srcPath = Path.join(__dirname, 'template');
        Editor.log('destPath: ' + destPath);
        Fs.copy(srcPath, destPath, {clobber: true}, (error) => {
            Editor.success('Finish copy over index.html.');
        });
    }
  }
}