module.exports = {
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
  ],
  env: {
    es6: true,
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
  ],
  settings: {
    react: {
      version: '999.999.999',
    },
  },
  ignorePatterns: ['node_nodules/*', 'dist/*', 'plugins/*'],
};
