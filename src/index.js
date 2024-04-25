const esprima = require('esprima');

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
