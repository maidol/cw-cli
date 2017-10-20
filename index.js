#! node

const fs = require('fs');
const path = require('path');
const templateDir = require('template-dir');

let templates = path.join(__dirname, 'templates')
let destination = '.';

templateDir(
  {
    source: templates, 
    destination: destination,
    onlyFiles: false
  }
);

copyTemplate(".gitignore.template", destination + '/.gitignore');

// var fs = require('fs');
// var path = require('path');

// var config = {};
// process.argv.slice(2).forEach(function (item) {
//   switch (item) {

//   }
// });

function copyTemplate(from, to) {
  from = path.join(__dirname, 'templates', from);
  write(to, fs.readFileSync(from, 'utf-8'))
}

function write(path, str, mode) {
  fs.writeFileSync(path, str)
}

function mkdir(path, fn) {
  fs.mkdir(path, function (err) {
    fn && fn()
  })
}
