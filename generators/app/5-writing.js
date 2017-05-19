'use strict';

const fs = require('fs');

module.exports = function () {
	if (!this.fs.exists(this.destinationPath() + '/.babelrc')) {
		this.fs.copy(__dirname + '/templates/template-.babelrc', this.destinationPath() + '/.babelrc');
	}

  this.fs.copy(__dirname + '/templates/.storybook/**/*', this.destinationPath() + '/.storybook', {
    globOptions: true
  });

  if (!this.fs.exists(this.destinationPath('stories'))) {
    this.fs.copy(__dirname + '/templates/stories/**/*', this.destinationPath() + '/stories', {
      globOptions: true
    });
  }

  if (!this.fs.exists(this.destinationPath('benchmark'))) {
    this.fs.copy(__dirname + '/templates/benchmark/**/*', this.destinationPath() + '/benchmark', {
      globOptions: true
    });
  }
};
