const Server = require('karma').Server;
const path = require('path');

const server = new Server({
  configFile: path.join(__dirname, '/karma.config.js'),
  autoWatch: true,
  singleRun: false
});

server.start();
