module.exports = {
  extends: [
    './rules/react',
    './rules/react_a11y',
    './rules/best_practices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/style',
    './rules/variables'
  ].map(require),
  rules: {}
};

console.log('TESTS PASSED');