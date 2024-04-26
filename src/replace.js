const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');

const code = 'const answer = 1 + 2;';
const ast = esprima.parseScript(code);
const repracedAst = estraverse.replace(ast, {
  enter: function (node) {
    if (node.type === estraverse.Syntax.BinaryExpression) {
      node.right = {
        ...node.right,
        value: 3,
        raw: '3',
      };
      return node;
    }
  }
});
const newCode = escodegen.generate(repracedAst);
console.log(newCode);
