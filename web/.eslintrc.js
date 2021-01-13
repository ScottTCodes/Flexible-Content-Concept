module.exports = {
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
  },
  ignorePatterns: ['node_nodules/*', 'cypress/*', '__sapper__', '*.svelte'],
};
