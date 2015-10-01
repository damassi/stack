import path from 'path';
import express from 'express';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const app = express();
const compiler = webpack(config);

app.use(require('webpack-hot-middleware')(compiler));
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(express.static('public'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(3333, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3333');
});
