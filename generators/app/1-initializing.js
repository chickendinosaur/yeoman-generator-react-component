'use strict';

module.exports = function () {
  this.composeWith(require.resolve('@chickendinosaur/generator-node-package'), {
    babel: {
    	presets: [
        'react',
        'es2015',
        'stage-2'
      ],
    	plugins: []
    },
    devDependencies: [
      '@kadira/storybook',
      'babel-preset-es2015',
      'babel-preset-react',
      'babel-preset-stage-2',
      'babelify',
      'browser-run',
      'browserify',
      'csscomb',
      'css-loader',
      'file-loader',
      'opn-cli',
      'react',
      'react-dom',
      'react-hot-loader@next',
      'style-loader'
    ],
    pkgPeerDependencies: {
      'react': '*',
      'react-dom': '*'
    },
    peerDependencies: [
      'react@*',
      'react-dom@*'
    ],
    scripts: {
      'benchmark': 'cd benchmark && for /R %i in (*.benchmark.*) do echo. && echo %i && echo. && browserify -t babelify %i | browser-run',
      'build': 'npm run clean && babel src -d lib',
      'clean': 'rm -rf lib',
      'lint': 'eslint "src/**/*.{jsx,js}" --fix && eslint "stories/**/*.{jsx,js}" --fix && eslint "test/**/*.{jsx,js}" --fix && csscomb src',
      "prepublish": "npm run test && npm run lint && npm run build",
      'storybook': 'npm run test && opn http://localhost:9999 && start-storybook -p 9999 -c .storybook',
      'test': 'babel-tape-runner test/**/*.spec.js | tap-spec'
  	}
  });
};
