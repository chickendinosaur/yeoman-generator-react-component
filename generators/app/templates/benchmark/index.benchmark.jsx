require('lodash');
const Benchmark = require('benchmark');
const React = require('react');
const ReactDOM = require('react-dom');

const suite = new Benchmark.Suite();
window.Benchmark = Benchmark;

/*
Setup
*/

const rootEl = document.createElement('div');

/*
Benchmark
*/

suite
    .add('render', function () {
      ReactDOM.render(null, rootEl);
    })
    .on('cycle', function (event) {
      let output = String(event.target);
      output = output.substring(0, output.indexOf('ops/sec') + 7);
      console.log('\x1b[33m%s\x1b[0m', output);
    })
    .on('complete', function () {
      window.close();
    })
    // Run async
    .run({ async: false });
