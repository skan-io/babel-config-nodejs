module.exports = {
  // Common to all envs below.
  plugins: [
    // Makes sure babel does not include the same code snipped in each file,
    // but imports helpers from a single module.
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-optional-catch-binding',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-transform-runtime'
  ],

  presets: [
    ['@babel/preset-env', {
      useBuiltIns: false,
      targets: {
        node: '10'
      }
    }]
  ],

  env: {
    // Jest runs with NODE_ENV=test and will use the following.
    // We target the current node version to minimize transcompilation.
    // This should speed up the test run and make it more debugable.
    test: {
      presets: [
        ['@babel/preset-env', {
          useBuiltIns: false,
          targets: {
            node: 'current'
          }
        }]
      ]
    }
  }
};
