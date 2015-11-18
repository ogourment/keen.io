Package.describe({
  name: 'ogourment:keen.io',
  summary: 'Use keen.io from https://gist.github.com/zlot/fb197e80f97df035e220',
  version: '0.0.1',
  git: 'https://github.com/ogourment/keen.io.git'
});

Package.on_use(function (api) {
  Npm.depends({'keen-js': '3.3.0'}); // note Npm.depends requires an explicit version to be added. Find out what the latest version is and replace the x.x.x
  api.addFiles('keen.io.js', 'server');
  api.export('Keen', 'server');
});
