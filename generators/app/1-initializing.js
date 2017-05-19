'use strict';

const arrayUnion = require('array-union');

module.exports = function () {
  this.composeWith(require.resolve('@chickendinosaur/generator-node-package'), {
    devDependencies: [
      '@kadira/storybook',
      'babel-preset-es2015',
      'babel-preset-react',
      'babel-preset-stage-2',
      "babelify",
      "browser-run",
      "browserify",
      'csscomb',
      'css-loader',
      'file-loader',
      'opn-cli',
      'react',
      'react-dom',
      'react-hot-loader@next',
      'style-loader'
    ],
    peerDependencies: [
      'react@*',
      'react-dom@*'
    ],
    scripts: {
      'benchmark': "cd benchmark && for /R %i in (*.benchmark.*) do echo. && echo %i && echo. && browserify -t babelify %i | browser-run",
      'build': 'npm run clean && babel src -d lib && cp package.json lib & cp README.md lib & cp LICENSE lib',
      'clean': 'rm -rf lib',
      'deploy': 'npm run test && npm run build && npm publish lib',
      'storybook': 'npm run test && opn http://localhost:9001 && start-storybook -p 9001 -c .storybook',
      'test': 'babel-tape-runner test/**/*.test.* && eslint src --fix && eslint stories --fix && csscomb src'
  	}
  });
};