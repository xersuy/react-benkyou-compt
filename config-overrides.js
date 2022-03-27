const {
  override,
  addWebpackAlias,
  addPostcssPlugins,
} = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    '~': require('path').resolve(__dirname, 'src'),
  }),

  addPostcssPlugins([
    require('react-app-rewire-postcss'),
    require('tailwindcss'),
    require('autoprefixer'),
  ]),
);

// module.exports = function override(config) {
//   if (!config.plugins) {
//     config.plugins = [];
//   }

//   config.plugins.push(
//     addWebpackAlias({
//       '~': require('path').resolve(__dirname, 'src'),
//     }),
//   );

//   config.plugins.push(
//     addPostcssPlugins([
//       // require('react-app-rewire-postcss')(config),
//       require('tailwindcss'),
//       require('autoprefixer'),
//     ]),
//   );
//   return config;
// };
