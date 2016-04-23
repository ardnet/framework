'use strict';

var generate = require('./lib/generate');
var options = {
  inputFolder: '../content',
  outputFile: '../public/data.json'
}

generate(options.inputFolder, (msg) => {
  console.log(msg);
});
