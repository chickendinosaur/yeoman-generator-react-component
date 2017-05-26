'use strict';

const fs = require('fs');

module.exports = function () {
  if (!fs.existsSync(this.destinationPath('.csscomb.json'))) {
    this.fs.copy(__dirname + '/templates/template-.csscomb.json', this.destinationPath('.csscomb.json'));
  }

  if (!fs.existsSync(this.destinationPath('.storybook'))) {
    mkdirSync('./.storybook');
    this.fs.copy(__dirname + '/templates/.storybook/**/*', this.destinationPath('.storybook'), {
      globOptions: true
    });
  }

  if (!fs.existsSync(this.destinationPath('src'))) {
    mkdirSync('./src');
    this.fs.copy(__dirname + '/templates/src/**/*', this.destinationPath('src'), {
      globOptions: true
    });
	}

  if (!fs.existsSync(this.destinationPath('stories'))) {
    mkdirSync('./stories');
    this.fs.copy(__dirname + '/templates/stories/**/*', this.destinationPath('stories'), {
      globOptions: true
    });
  }

  if (!fs.existsSync(this.destinationPath('benchmark'))) {
    mkdirSync('./benchmark');
    this.fs.copy(__dirname + '/templates/benchmark/**/*', this.destinationPath('benchmark'), {
      globOptions: true
    });
  }

  if (!fs.existsSync(this.destinationPath('test'))) {
    mkdirSync('./test');
    this.fs.copy(__dirname + '/templates/test/**/*', this.destinationPath('test'), {
      globOptions: true
    });
  }
}

function mkdirSync(path) {
	if (!fs.exists(path)) {
		fs.mkdirSync(path);
	}
}
