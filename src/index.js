const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');

const ast = esprima.parseScript(`
const answer = 1 + 2;
if (answer % 2 === 0) {
  console.log('The answer is even.');
} else {
  console.log('The answer is odd.');
}
console.log('The answer is ' + answer + '.');
`);

console.dir(ast, {depth: null});

let depth = 0;
estraverse.traverse(ast, {
  enter: function (node, parent) {
    console.log(' '.repeat(depth) + '- enter: ' + node.type);
    depth++;
  },
  leave: function (node, parent) {
    depth--;
    console.log(' '.repeat(depth) + '- leave: ' + node.type);
  }
});

const code = escodegen.generate(ast);
console.log(code);

eval(code);
