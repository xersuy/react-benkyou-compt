const { override, addWebpackAlias } = require('customize-cra');

const path = require('path');
console.log('--');
module.exports = override(
  addWebpackAlias({
    '~': require('path').resolve(__dirname, 'src'),
  }),
);
