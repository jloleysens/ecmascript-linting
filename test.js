'use strict';

const A = 'fish';
const B = 'turnip';

if (require.main == module) {
  if (A == B) {
    console.log('yaay!');
  }
}

const p = console.log;

// No parens around arg
var test = val => ({
  map: f => f(val),
  [4 + '2']: false,
});

// Object defaults
var test2 = ({done = true, something = 1}) => ({
  done,
  something,
});

p(test2({something: 2}));

// Object destructuring
var {createReadStream} = require('fs');

p('createReadStream function ?', typeof createReadStream == 'function');

const c = 321;

p(c - 2);

switch (true) {
  case false:
    break;
  case true:
    break;
  default:
    break;
}

const obj = {a: 1, b: '2', c: true};
const obj1 = {...obj, d: null};
p(obj1);
