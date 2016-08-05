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
            var minify = require('minify');
            var mainPath = Path.join(destPath, 'main.js');
            var cssPath = Path.join(destPath, 'style-mobile.css');
            var htmlPath = Path.join(destPath, 'index.html');
            minify(mainPath, 'name', function(error, name) {
                console.log(error || name);
                Fs.copySync(name, mainPath, {clobber: true});
            });
            minify(htmlPath, 'name', function(error, name) {
                console.log(error || name);
                Fs.copySync(name, htmlPath, {clobber: true});
            });
            minify(cssPath, 'name', function(error, name) {
                console.log(error || name);
                Fs.copySync(name, cssPath, {clobber: true});
            });
        });
    }
  }
}