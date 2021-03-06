Package.describe({
  summary: "SASS for meteor"
});
// meteor test-packages ./
Package._transitional_registerBuildPlugin({
  name: "compileSass",
  use: [],
  sources: [
    'plugin/compile-sass.js'
  ],
  npmDependencies: {"node-sass": "0.8.1"}
});

Package.on_test(function (api) {
  api.use(['test-helpers', 'tinytest', 'sass', 'spark'], ['client']);

  api.add_files(['test/tests.scss', 'test/empty-sass.scss', 'test/tests.js'], ['client']);
});